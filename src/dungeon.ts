import { Sprite } from "pixi.js";
import { AssetLoader } from "./asset-loader";
import { GameObject } from "./game-object";

export class Dungeon extends GameObject {
    constructor(
        x: number,
        y: number
    ) {
        super(x, y);
        const dungeonTexture = AssetLoader.getInstance().get('dungeon.png');
        this.addChild(Sprite.from(dungeonTexture));
    }
}