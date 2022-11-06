import { Application, Sprite } from "pixi.js";
import { AssetLoader } from "./asset-loader";
import { assets_location } from "./config";

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
    const dungeonTexture = AssetLoader.getInstance().get('dungeon.png');
    const bgSprite = Sprite.from(dungeonTexture);
    app.stage.addChild(bgSprite);
}

function gameLoop() {

}

app.ticker.add(gameLoop);