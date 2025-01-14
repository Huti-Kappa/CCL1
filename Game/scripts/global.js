import { gameSettings as gs} from './settings.js';
import { Enemy } from "./enemy.js";


const global = {};

global.canvas = document.querySelector("#canvas");
global.ctx = canvas.getContext("2d");
global.canvas.width = gs.game.screenWidth
global.canvas.height = gs.game.screenHeight
global.prevTotalRunningTime = 0;
global.deltaTime = 0;
global.enemyCreationTime = 0;
global.centerX = global.canvas.width / 2;
global.centerY = global.canvas.height / 2;

global.allGameObjects = [];
global.enemyCounter = 0;
global.enemyAmount = 0;
global.hitCounter = 0;
global.enemy = gs.dirk;
global.hp = gs.player.health;
global.attackPatternCount = 0;
global.gameloss = false;


global.handleEnemyCreation = function () {
    global.enemyAmount = global.enemy.attackPatterns[global.attackPatternCount].length;
    global.enemyCreationTime += global.deltaTime * 1000;
    if (global.enemyCreationTime >= global.enemy.enemyCreationInterval && global.enemyCounter < global.enemy.attackPatterns[global.attackPatternCount].length) {
        if (!global.allGameObjects[global.enemyCounter]) {
            global.allGameObjects[global.enemyCounter] = new Enemy(global.enemy.attackPatterns[global.attackPatternCount][global.enemyCounter]);
        }
        global.enemyCounter++;
        global.enemyCreationTime = 0;
    }
}

global.checkStatus = function () {
    if(global.hp==0){
        global.gameloss=true;
        console.log("FAIL")
    }
}

global.resetStage = function () {
    global.enemyCounter = 0;
    global.enemyAmount = 0;
    global.hitCounter = 0;
    global.allGameObjects = [];
    global.attackPatternCount++;
}

global. drawTextOnCanvas = function (text, x, y, font = "30px Arial", color = "black") {
    // Hintergrund löschen


    // Schriftstil setzen
    global.ctx.font = font;
    global.ctx.fillStyle = color;

    // Text auf das Canvas zeichnen
    global.ctx.fillText(text, x, y);
}

export { global }