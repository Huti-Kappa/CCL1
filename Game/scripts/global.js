import { gameSettings as gs} from './settings.js';
import { Enemy } from "./enemy.js";
import { Button } from "./button.js";



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

global.button = new Button(100,100,200,100,"teset",30,"Inter");

global.allGameObjects = [];
global.enemyCounter = 0;
global.enemyAmount = 0;
global.hitCounter = 0;
global.enemy = gs.dirk;
global.hp = gs.player.health;
global.attackPatternCount = 0;
global.gameloss = false;
global.currentScreen = 0;
global.isMouseClicked = false;


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

global.drawTextOnCanvas = function (text, x, y, font = "30px Arial", color = "black") {

    global.ctx.font = font;
    global.ctx.fillStyle = color;

    global.ctx.fillText(text, x, y);
}

// Update mouse position and check for click state
document.addEventListener('mousemove', (e) => {
    const { left, top } = global.canvas.getBoundingClientRect();
    global.mouseX = e.clientX - left;
    global.mouseY = e.clientY - top;
});

// Handle click directly without a state variable
document.addEventListener('click', () => {
    console.log("Mouse clicked!");
    global.handleClickAction();  // Call a function directly when click happens
});

// Example function that gets called on click
global.handleClickAction = function() {
    console.log("Click action triggered at:", global.mouseX, global.mouseY);
    // Perform your actions based on the click here
}


export { global }