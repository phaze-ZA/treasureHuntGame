import { Application, Sprite } from "pixi.js";
import { AssetLoader } from "./asset-loader";
import { assets_location } from "./config";
import { Door } from "./door";
import { Dungeon } from "./dungeon";
import { Scene } from "./scene";

const app = new Application({
    width: 512,
    height: 512,
    antialias: true,
    transparent: false,
    resolution: 1
});

document.body.appendChild(app.view);

AssetLoader.getInstance().load(assets_location, 'base_assets')
    .then(init);


function init() {
    const gameScene = new Scene();
    app.stage.addChild(gameScene);

    const dungeon = new Dungeon(0, 0);
    gameScene.addChild(dungeon);

    const door = new Door(32, 0);
    gameScene.addChild(door);

    const gameOverScene = new Scene();
    gameOverScene.visible = false;
    app.stage.addChild(gameOverScene);
}

function gameLoop() {

}

app.ticker.add(gameLoop);