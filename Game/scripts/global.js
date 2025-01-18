import { gameSettings as gs} from './settings.js';
import { Enemy } from "./enemy.js";
import { Screen } from "./screens.js";
import { State } from "./statemanager.js";
import { Text } from "./text.js";
import { SpriteRender } from "./spriteRenderer.js";

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
global.gameMusic = document.getElementById('gameMusic');


global.sp = new Text(-300,200,100,100,"Sets of Numbers",25,"Tiny5","white");


global.nohit1 = new Image();
global.nohit1.src = './images/nohit_1.png';
global.nohit2 = new Image();
global.nohit2.src = './images/nohit_2.png';
global.nohit3 = new Image();
global.nohit3.src = './images/nohit_3.png';
global.nohit4 = new Image();
global.nohit4.src = './images/nohit_4.png';

global.try = new SpriteRender(100,100,40,40)
global.try.loadImagesFromSpritesheet('./images/hit_1_sheet.png',4,1);
global.try.switchCurrentSprites(0, 3);

// Play the music when the game starts
global.startGameMusic = function () {
  global.gameMusic.play();
}

// Pause the music when the game is paused
global.pauseGameMusic = function () {
    global.gameMusic.pause();
    global.gameMusic.currentTime = 0
}




global.handleEnemyCreation = function () {
    global.enemyAmount = global.enemy.attackPatterns.length;
    global.enemyCreationTime += global.deltaTime;
    if (global.enemyCreationTime >= global.enemy.timings[global.enemyCounter] && global.enemyCounter < global.enemy.attackPatterns.length) {
        if (!global.allGameObjects[global.enemyCounter]) {
            global.allGameObjects[global.enemyCounter] = new Enemy(global.enemy.attackPatterns[global.enemyCounter]);
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

    if(global.currentBoss==3){
        console.log("YOU WON")
    }
    global.currentBoss++;
    global.enemy = global.enemyArray[global.currentBoss];
    global.enemyCounter = 0;

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