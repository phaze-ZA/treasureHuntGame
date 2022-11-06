import { Container } from "pixi.js";

export class GameObject extends Container {
    constructor(x: number, y: number, w?: number, h?: number) {
        super();
        if (w) {
            this.width = w;
        }
        if (h) {
            this.height = h;
        }
        this.x = x;
        this.y = y;
    }
}