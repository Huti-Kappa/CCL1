export const gameSettings = {
    dirk: {
        name: "EnemyName",  
        health: 100,                 
        attackPatterns: [
            [1,3,2,4,1,2,1,3,2,3,2,4,1],
            [1,2],
            [4,4,4,4,4,4,4,4,4]
        ],
        enemyCreationInterval: 500,
        distanceX : 500,
        distanceY : 500,
        speedMultiplier: 0.7
    },

    dirke: {
        name: "EnemyName",  
        health: 100,                 
        attackPatterns: [
            [1,3,2,4,1,2,1,3,2,3,2,4,1],
            [1,2],
            [4,4,4,4,4,4,4,4,4]
        ],
        enemyCreationInterval: 500,
        distanceX : 500,
        distanceY : 500,
        speedMultiplier: 0.7
    },

    game: {
        screenWidth: 1024,
        screenHeight: 576,
        enemies: [dirk,dirke]
    },

    player: {
        health: 3,
        speed: 5,
        attackPower: 20,
    },
};
