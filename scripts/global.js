import { gameSettings as gs} from './settings.js';
import { Enemy } from "./enemy.js";
import { Screen } from "./screens.js";
import { State } from "./statemanager.js";
import { Center } from "./center.js";
import { Music } from "./music.js";
import { Boss } from "./bossRenderer.js";
import { SpriteRender } from './spriteRenderer.js';

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

global.zoomFactor = 1; 
global.targetZoomFactor = 1; 
global.zoomSpeed = 0.1; 


global.mainScreen = new Screen();
global.gameOver = new Screen();
global.pauseScreen = new Screen();
global.explanation = new Screen();
global.win = new Screen();
global.chooseEnemy = new Screen();
global.realWin = new Screen();

global.allGameObjects = [];
global.hitCounter = 0;
global.hp = gs.player.health;
global.isMouseClicked = false;

global.enemyArray= [gs.enemy1,gs.enemy2,gs.enemy3,gs.enemy4];
global.musicArray= ["joni","vayvay","gameMusic"];
global.enemyCounter = 0;
global.enemyAmount = 0;
global.enemy = global.enemyArray[0];
global.currentBoss = 0;

global.currentScreen = 0;
global.currentScreenValue = gs.mainScreen;
global.currentScreenButtons = global.mainScreen;

global.state = new State();

global.boss = new Boss(global.canvas.width/2-150,-10,300,300, './images/sprite3.png', 21, 1, 0, 20,global.enemy.dialogue,global.enemy.dialogueIntervall,19,20,15,18),

global.bosses = [
    new Boss(global.canvas.width/2-150,-10,300,300, './images/sprite3.png', 21, 1, 0, 20,global.enemy.dialogue,global.enemy.dialogueIntervall,19,20,15,18),
    new Boss(global.canvas.width/2-120,50,250,250,'./images/sprite1.png',12,1,0,5,global.enemyArray[1].dialogue,global.enemyArray[1].dialogueIntervall,10,11,8,9),
    new Boss(global.canvas.width/2-190,20,300,300, './images/sprite4.png', 4, 1, 0, 1,global.enemyArray[2].dialogue,global.enemyArray[2].dialogueIntervall,0,1,2,3),
    new Boss(global.canvas.width/2-150,-10,300,300, './images/sprite4.png', 21, 1, 0, 20,global.enemyArray[2].dialogue,global.enemyArray[2].dialogueIntervall,19,20,15,18),
];

//global.sp = new Text(-300,200,100,100,"Sets of Numbers",25,"Tiny5","white");
global.center = new Center();

global.centerimg = new Image();
global.centerimg.src = './images/hitbox.png';
global.pillar = new Image();
global.pillar.src = './images/pillar.png';

global.gameMusic = new Music("joni",0.4);
global.hit = new Music("hit",0.5);
global.miss = new Music("miss",0.5);
global.voice = new Music("voice",0.2);
global.bg = new Music("bgmusic",0.2);


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
    if(global.currentBoss==2){
        global.currentScreen=8;
    } else {
    console.log("test");
    global.enemyCounter = 0;
    global.enemyAmount = 0;
    global.hitCounter = 0;
    global.allGameObjects = [];

    console.log(this.currentBoss);
    global.currentBoss++;
    global.boss = global.bosses[global.currentBoss];
    global.gameMusic.stopMusic();
    global.currentScreen=6;
    global.enemy = global.enemyArray[global.currentBoss];
    global.enemyCounter = 0;
    }
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
        global.currentScreenButtons.buttons[key].handleClick();
    }
    console.log("Click action triggered at:", global.mouseX, global.mouseY);
}

global.setupCenter = function(){
    global.left = new SpriteRender(global.canvas.width/2 -105,global.canvas.height/2-25,50,50);
    global.top = new SpriteRender(global.canvas.width/2 -25,global.canvas.height/2-105,50,50);
    global.right = new SpriteRender(global.canvas.width/2 +55,global.canvas.height/2-25,50,50);
    global.bottom = new SpriteRender(global.canvas.width/2 -25,global.canvas.height/2+55,50,50);
    global.left.loadImagesFromSpritesheet('./images/hit_1_sheet.png',4,1);
    global.left.switchCurrentSprites(0, 3);
    global.top.loadImagesFromSpritesheet('./images/hit_2_sheet.png',4,1);
    global.top.switchCurrentSprites(0, 3);
    global.right.loadImagesFromSpritesheet('./images/hit_3_sheet.png',4,1);
    global.right.switchCurrentSprites(0, 3);
    global.bottom.loadImagesFromSpritesheet('./images/hit_4_sheet.png',4,1);
    global.bottom.switchCurrentSprites(0, 3);
}
global.setupCenter();
export { global }