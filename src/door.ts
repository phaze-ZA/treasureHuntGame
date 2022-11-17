import { Sprite } from "pixi.js";
import { AssetLoader } from "./asset-loader";
import { Dungeon } from "./dungeon";
import { GameObject } from "./game-object";

export class Door extends GameObject {
    constructor(x: number, y: number) {
        super(x, y);
        const texture = AssetLoader.getInstance().get('door.png');
        this.addChild(Sprite.from(texture));
    }
}