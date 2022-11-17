import { Application, Sprite } from "pixi.js";
import { AssetLoader } from "./asset-loader";
import { assets_location } from "./config";
import { Door } from "./door";
import { Dungeon } from "./dungeon";
import { Explorer } from "./explorer";
import { Key } from "./key";
import { Scene } from "./scene";
import { Treasure } from "./treasure";

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

    const explorer = new Explorer(68, gameScene.height / 2);
    gameScene.addChild(explorer);

    const treasure = new Treasure(gameScene.width - 48, gameScene.height / 2);
    gameScene.addChild(treasure);

    const gameOverScene = new Scene();
    gameOverScene.visible = false;
    app.stage.addChild(gameOverScene);
}

function gameLoop() {

}

app.ticker.add(gameLoop);