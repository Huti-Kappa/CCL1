import { gameSettings as gs} from './settings.js';
import { Enemy } from "./enemy.js";

const global = {};

global.canvas = document.querySelector("#canvas");
global.ctx = canvas.getContext("2d");
global.canvas.width = 1024
global.canvas.height = 576
global.prevTotalRunningTime = 0;
global.deltaTime = 0;
global.allGameObjects = [];
global.counter = 0;
global.enemyCreationTime = 0;  // Time accumulator for enemy creation
global.centerX = global.canvas.width / 2;
global.centerY = global.canvas.height / 2;
global.hp = 3;
global.enemy = gs.dirk;

// Function to handle enemy creation based on time intervals
global.handleEnemyCreation = function () {
    global.enemyCreationTime += global.deltaTime * 1000; // Convert deltaTime to milliseconds
    if (global.enemyCreationTime >= global.enemy.enemyCreationInterval && global.counter < global.enemy.attackPatterns.length) {
        // Ensure the array doesn't have empty slots
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