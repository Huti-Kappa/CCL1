import { global } from "./global.js";
import { gameSettings as gs } from './settings.js';

// Main game loop
function gameLoop(totalRunningTime) {
    global.deltaTime = (totalRunningTime - global.prevTotalRunningTime) / 1000; // Convert ms to seconds
    global.prevTotalRunningTime = totalRunningTime;

    // Smoothly adjust the zoom factor toward the target zoom level
    global.zoomFactor += (global.targetZoomFactor - global.zoomFactor) * global.zoomSpeed;

    global.ctx.clearRect(0, 0, global.canvas.width, global.canvas.height);

    if (global.currentScreen !== 1) {
        global.state.screenStateManager();
    } else {
        renderGameScreen();
        handleGameObjects();
        animateDirections();
    }

    global.checkStatus();
    requestAnimationFrame(gameLoop);
}

// Render the game screen
function renderGameScreen() {
    global.ctx.save(); // Save current context state

    // Calculate the canvas center
    const canvasCenterX = global.canvas.width / 2;
    const canvasCenterY = global.canvas.height / 2;

    // Apply zoom transformation centered on the canvas
    global.ctx.translate(canvasCenterX, canvasCenterY); // Move to center
    global.ctx.scale(global.zoomFactor, global.zoomFactor); // Apply zoom
    global.ctx.translate(-canvasCenterX, -canvasCenterY); // Move back

    // Draw everything
    drawHUD();
    global.boss.talk();
    global.boss.draw();

    // Render arrows and lines
    global.ctx.drawImage(global.centerimg, global.centerX - 200 / 2, global.centerY - 200 / 2, 200, 200);
    global.ctx.drawImage(global.pillar, 0, 0, global.canvas.width, global.canvas.height);
    global.handleEnemyCreation();

    if (global.hitCounter === global.enemyAmount) {
        global.resetStage();
    }

    global.ctx.restore(); // Restore the original context state
}

// Handles player controls for zoom pulse effect
function controlls(event) {
    if (global.currentScreen === 1) {
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
                    hitDetected = true;
                    console.log("HIT");
                    gameObject.destroyBullet(1);
                }
            });

            // Trigger a centered zoom pulse effect
            global.targetZoomFactor = 1.02; // Slightly zoom in
            setTimeout(() => {
                global.targetZoomFactor = 1; // Reset to normal zoom level
            }, 100); // After 100ms, return to normal zoom

            // If no hit detected, subtract health
            if (!hitDetected) {
                global.hp--;
                global.miss.hitMusic();
                console.log("Leben abgezogen");
            }
        }
    }
}

// Handle and render game objects
function handleGameObjects() {
    global.allGameObjects.forEach((gameObject, index) => {
        gameObject.update();
        gameObject.draw();
        if (gameObject.collisionDetection() === 2) {
            gameObject.destroyBullet(2);
            global.hp--;
            console.log("Damage");
        }
    });
}

function animateDirections() {
    const directions = [global.left, global.right, global.top, global.bottom];

    directions.forEach((direction) => {
        if (direction.active) {
            direction.active = direction.animateOnce();
        }
    });
}

// Render HUD
function drawHUD() {
    global.ctx.font = "mania";
    global.ctx.fillText("Progress", 170, 690);
    global.ctx.fillText("HP", 950, 690);

    // Progress Bar
    global.ctx.fillStyle = "grey";
    global.ctx.fillRect(120, 700, global.enemy.attackPatterns.length, 10);
    global.ctx.fillRect(global.canvas.width - 420, 700, gs.player.health * 30, 10);
    global.ctx.fillStyle = "white";
    global.ctx.fillRect(120, 700, global.enemy.attackPatterns.length - global.enemyCounter, 10);
    global.ctx.fillStyle = "red";
    global.ctx.fillRect(global.canvas.width - 420, 700, global.hp * 30, 10);
}

// Initialize the game
requestAnimationFrame(gameLoop);
global.state.setupScreen(global.mainScreen, global.currentScreenValue);
document.addEventListener("keypress", controlls);
