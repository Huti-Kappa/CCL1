import { gameSettings as gs} from './settings.js';
import { Enemy } from "./enemy.js";
import { Screen } from "./screens.js";
import { State } from "./statemanager.js";


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


global.mainScreen = new Screen();
global.gameOver = new Screen();
global.winScreen = new Screen();
global.pauseScreen = new Screen();

global.allGameObjects = [];
global.hitCounter = 0;
global.hp = gs.player.health;
global.attackPatternCount = 0;
global.isMouseClicked = false;

global.enemyArray= [gs.enemy1,gs.enemy2,gs.enemy3,gs.enemy4];
global.enemyCounter = 0;
global.enemyAmount = 0;
global.enemy = global.enemyArray[0];
global.currentBoss = 0;

global.currentScreen = 0;
global.currentScreenValue = gs.mainScreen;
global.currentScreenButtons = global.mainScreen;

global.state = new State();




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
        global.currentScreen = 2;
        console.log("FAIL")
    }
}

global.resetStage = function () {
    console.log("test");
    global.enemyCounter = 0;
    global.enemyAmount = 0;
    global.hitCounter = 0;
    global.allGameObjects = [];
    if(global.attackPatternCount!=global.enemy.attackPatterns.length-1){
        global.attackPatternCount++;
    } else {
        if(global.currentBoss==3){
            console.log("YOU WON")
        }
        global.currentBoss++;
        global.enemy = global.enemyArray[global.currentBoss];
        global.attackPatternCount = 0;
    }
}

global.drawTextOnCanvas = function (text, x, y, font = "30px Arial", color = "black") {

    global.ctx.font = font;
    global.ctx.fillStyle = color;
    global.ctx.fillText(text, x, y);
}

document.addEventListener('mousemove', (e) => {
    const { left, top } = global.canvas.getBoundingClientRect();
    global.mouseX = e.clientX - left;
    global.mouseY = e.clientY - top;
});

document.addEventListener('click', () => {
    console.log("Mouse clicked!");
    global.handleClickAction();
});

global.handleClickAction = function() {
    for (const key in global.currentScreenButtons.buttons) {
        global.currentScreenButtons.buttons[key].clickme();
    }
    console.log("Click action triggered at:", global.mouseX, global.mouseY);
}


export { global }