import { Sprite } from "pixi.js";
import { AssetLoader } from "./asset-loader";
import { GameObject } from "./game-object";

export class Explorer extends GameObject {
    vx: number;
    vy: number;
    constructor(x: number, y: number) {
        super(x, y);
        this.vx = 0;
        this.vy = 0;

        const texture = AssetLoader.getInstance().get('explorer.png');
        const sprite = Sprite.from(texture);
        sprite.anchor.set(0.5, 0.5);
        this.addChild(sprite);
    }
}