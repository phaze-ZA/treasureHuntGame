import { Sprite } from "pixi.js";
import { AssetLoader } from "./asset-loader";
import { GameObject } from "./game-object";

export class Treasure extends GameObject {
    constructor(x: number, y: number) {
        super(x, y);

        const texture = AssetLoader.getInstance().get('treasure.png');
        const sprite = Sprite.from(texture);
        sprite.anchor.set(1, 0.5)
        this.addChild(sprite);
    }
}