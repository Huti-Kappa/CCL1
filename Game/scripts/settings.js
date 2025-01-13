// gameSettings.js

export const gameSettings = {
    dirk: {
        name: "EnemyName",  
        health: 100,        
        speed: 2,           
        attackPatterns: [1,3,2,4,1,2,1],
        enemyCreationInterval: 500,
        distanceX : 500,
        distanceY : 500,
        speedMultiplier: 2
    },

    game: {
        screenWidth: 800,
        screenHeight: 600,
    },

    player: {
        health: 100,
        speed: 5,
        attackPower: 20,
    },
};
