import { Sprite } from "pixi.js";
import { AssetLoader } from "./asset-loader";
import { GameObject } from "./game-object";

export class Monster extends GameObject {
    vx: number = 0;
    vy: number = 0;
    constructor(x: number, y: number) {
        super(x, y);
        const texture = AssetLoader.getInstance().get('blob.png');
        const sprite = Sprite.from(texture);
        this.addChild(sprite);
    }
}