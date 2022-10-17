import { Application } from "pixi.js";

const app = new Application({
    width: 512,
    height: 512,
    antialias: true,
    transparent: false,
    resolution: 1
});
document.body.appendChild(app.view);