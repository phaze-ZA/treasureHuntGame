/*
    This will be an asset loader
    Should have:
    - method to load assets
    - method to retrieve assets from texture map, should return asset

    Singleton:
    Should be the only one of its kind and handle loading for whole game
*/

import { Loader, Resource, Texture } from "pixi.js";
import { assets } from "./config";

export class AssetLoader {
    private static instance: AssetLoader;
    public textureMap: Record<string, Texture> = {};

    private constructor() {
        // Make constructor private to prevent construction calls
    }

    static getInstance(): AssetLoader {
        if (!AssetLoader.instance) {
            AssetLoader.instance = new AssetLoader();
        }

        return AssetLoader.instance;
    }

    load(url: string, storeName: string): Promise<Loader> {
        return new Promise((resolve: Loader.OnCompleteSignal) => {
            Loader.shared
                .add(storeName, url)
                .load((loader, resources) => {
                    assets.forEach(asset => {
                        const textures = resources[storeName].textures;
                        if (!textures) {
                            throw new Error(`Could not load ${asset} from ${url}/${storeName}`);
                        }
                        AssetLoader.instance.textureMap[asset] = textures[asset];
                    });

                    resolve(loader, resources);
                });
        });
    }

    get(textureName: string): Texture<Resource> {
        if (!AssetLoader.instance.textureMap[textureName]) {
            throw new Error('Assets not loaded yet. Please load assets first');
        }

        return AssetLoader.instance.textureMap[textureName];
    }
}