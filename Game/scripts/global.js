import { gameSettings as gs} from './settings.js';
import { Enemy } from "./enemy.js";

const global = {};

global.canvas = document.querySelector("#canvas");
global.ctx = canvas.getContext("2d");
global.canvas.width = gs.game.screenWidth
global.canvas.height = gs.game.screenHeight
global.prevTotalRunningTime = 0;
global.deltaTime = 0;
global.allGameObjects = [];
global.counter = 0;
global.enemyCreationTime = 0;
global.centerX = global.canvas.width / 2;
global.centerY = global.canvas.height / 2;
global.enemy = gs.dirk;
global.hp = gs.player.health;


global.handleEnemyCreation = function () {
    global.enemyCreationTime += global.deltaTime * 1000;
    if (global.enemyCreationTime >= global.enemy.enemyCreationInterval && global.counter < global.enemy.attackPatterns.length) {
        if (!global.allGameObjects[global.counter]) {
            global.allGameObjects[global.counter] = new Enemy(global.enemy.attackPatterns[global.counter]);
        }
        global.counter++;
        global.enemyCreationTime = 0;
    }
}

global.checkStatus = function () {
    if(global.hp==0){
        console.log("FAIL")
    }
}



export { global }