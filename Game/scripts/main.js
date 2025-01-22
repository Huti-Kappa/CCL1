import { global } from "./global.js";

function gameLoop(totalRunningTime) {
    global.deltaTime = (totalRunningTime - global.prevTotalRunningTime) / 1000; // Convert ms to seconds
    global.prevTotalRunningTime = totalRunningTime;
    global.ctx.clearRect(0, 0, global.canvas.width, global.canvas.height);

    if (global.currentScreen != 1) {
        global.state.screenStateManager();
    } else {
        bar(120,700,300,10);
        healthBar(global.canvas.width-420,700,300,10);
        global.boss.draw();
        global.boss.talk();
        global.ctx.drawImage(global.centerimg,global.centerX-200/2,global.centerY-200/2,200,200);
        global.ctx.drawImage(global.pillar,0,0,global.canvas.width,global.canvas.height);
        global.center.draw();
        global.handleEnemyCreation();

        if (global.hitCounter == global.enemyAmount) {
            global.resetStage();
        }

        // Update and draw all game objects
        for (const key in global.allGameObjects) {
            global.allGameObjects[key].update();
            global.allGameObjects[key].draw();
            if (global.allGameObjects[key].collisionDetection() == 2) {
                //global.miss.hitStart();
                global.allGameObjects[key].destroyBullet(2);
                global.hp--;
                console.log("Damage");
            }
        }

        // Run animation if active
        animateDirections();
    }
    //global.sp.draw(50);
    global.checkStatus();
    requestAnimationFrame(gameLoop);
}


function animateDirections() {
    const directions = [global.left, global.right, global.top, global.bottom];

    directions.forEach(direction => {
        if (direction.active) {
            direction.active = direction.animateOnce();
        }
    });
}

function controlls(event) {
    const directionMap = {
        w: { direction: 2, animation: global.top },
        a: { direction: 1, animation: global.left },
        s: { direction: 4, animation: global.bottom },
        d: { direction: 3, animation: global.right }
    };

    const input = directionMap[event.key];
    if (input) {
        input.animation.startAnimationOnce();
        let hitDetected = false;

        global.allGameObjects.forEach(gameObject => {
            if (gameObject.collisionDetection() === 1 && gameObject.getDir() === input.direction) {
                // Spieler hat ein Ziel getroffen
                hitDetected = true;
                console.log("HIT");
                gameObject.destroyBullet(1);
            }
        });

        // Wenn kein Treffer erfolgt, wird ein Leben abgezogen
        if (!hitDetected) {
            global.hp--;
            global.miss.hitStart();
            console.log("Leben abgezogen");
        }
    }
}

function bar(x,y,width,height){
    global.ctx.fillStyle = "grey";
    global.ctx.fillRect(x,y,global.enemy.attackPatterns.length,height); // Hier "fillRect" statt "drawRect"
    console.log(global.enemy.attackPatterns.length);
    global.ctx.fillStyle = "white";
    global.ctx.fillRect(x,y,global.enemy.attackPatterns.length-global.enemyCounter,height); // Hier "fillRect" statt "drawRect"
}

function healthBar(x,y,width,height){
    global.ctx.fillStyle = "grey";
    global.ctx.fillRect(x,y,global.enemy.attackPatterns.length,height); // Hier "fillRect" statt "drawRect"
    console.log(global.enemy.attackPatterns.length);
    global.ctx.fillStyle = "red";
    global.ctx.fillRect(x,y,global.enemy.attackPatterns.length-global.enemyCounter,height); // Hier "fillRect" statt "drawRect"
}




requestAnimationFrame(gameLoop);
global.state.setupScreen(global.mainScreen,global.currentScreenValue);
document.addEventListener("keypress", controlls);
