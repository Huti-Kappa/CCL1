import { global } from "./global.js";
import { gameSettings as gs} from './settings.js';

export const gameSettings = {
    enemy1: {
        name: "EnemyName",  
        health: 100,     
        timings:[0,0.37052154195011333,0.37052154195011333,0.4049886621315193,0.4006802721088436,0.4006802721088434,0.3575963718820865,0.35759637188208604,0.35328798185941057,0.35759637188208604,0.37913832199546516,0.37913832199546427,0.3834467120181406,0.37913832199546516,0.37913832199546516,0.37913832199546427,0.37913832199546516,0.37913832199546516,0.37913832199546427,0.37913832199546516,0.37913832199546516,0.37913832199546427,0.37913832199546427,0.37913832199546604,0.37913832199546427,0.37913832199546427,0.37913832199546604,0.37913832199546427,0.37913832199546427,0.37913832199546604,0.37913832199546427,0.37913832199546427,0.37913832199546604,0.37913832199546427,0.37913832199546427,0.37913832199546604,0.37913832199546427,0.37913832199546427,0.37913832199546604,0.37913832199546427,0.37913832199546427,0.38344671201813973,0.3834467120181415,0.3834467120181415,0.3834467120181415,0.38344671201813796,0.3834467120181415,0.3834467120181415,0.3834467120181415,0.38344671201813796,0.3834467120181415,0.3834467120181415,0.3834467120181415,0.38344671201813796,0.3834467120181415,0.3834467120181415,0.3834467120181415,0.38344671201813796,0.3834467120181415,0.3834467120181415,0.38344671201813796,0.3834467120181415,0.3834467120181415,0.3834467120181415,0.38344671201813796,0.3834467120181415,0.3834467120181415,0.3834467120181415,0.38344671201813796,0.3834467120181415,0.3834467120181415,0.3834467120181415,0.38344671201813796,0.37913832199546604,0.37913832199546604,0.3791383219954625,0.37913832199546604,0.37913832199546604,0.3791383219954625,0.37913832199546604,0.37913832199546604,0.3791383219954625,0.37913832199546604,0.3791383219954625,0.3791383219954696,0.3791383219954625,0.3791383219954625,0.3791383219954696,0.3791383219954625,0.3834467120181415,0.3834467120181415,0.3834467120181415,0.3834467120181344,0.3834467120181415,0.3834467120181415,0.3834467120181415,0.3834467120181415,0.3834467120181415,0.3834467120181415,0.3834467120181415,0.3834467120181344,0.3791383219954696,0.3791383219954625,0.3791383219954625,0.3791383219954696,0.3791383219954625,0.3791383219954625,0.3791383219954696,0.3791383219954625,0.3791383219954625,0.3791383219954696,0.3791383219954625,0.3791383219954625,0.3791383219954696,0.3791383219954625,0.3791383219954625,0.3791383219954696,0.3791383219954625,0.3791383219954625,0.3791383219954696,0.3791383219954625,0.3791383219954625,0.3791383219954696,0.3791383219954625,0.3791383219954625,0.3791383219954696,0.3791383219954625,0.3791383219954625,0.3791383219954696,0.3791383219954625,0.3791383219954625,0.3791383219954696,0.3791383219954625,0.3791383219954625,0.3791383219954696,0.3791383219954625,0.3791383219954625,0.3791383219954696,0.3791383219954625,0.3791383219954625,0.3791383219954696,0.3791383219954625,0.3791383219954625,0.3791383219954696,0.3791383219954625,0.3791383219954625,0.3791383219954696,0.3791383219954625,0.3791383219954625,0.3791383219954696,0.3791383219954625,0.3791383219954625,0.3791383219954696,0.3791383219954625,0.3791383219954625,0.3791383219954696,0.3791383219954625,0.3791383219954625,0.3791383219954696,0.3791383219954625,0.3791383219954625,0.3791383219954696,0.3791383219954625,0.3791383219954625,0.3791383219954696,0.3791383219954625,0.3791383219954625,0.3791383219954696,0.3791383219954696,0.3791383219954554,0.3791383219954696,0.3791383219954696,0.3791383219954554,0.3791383219954696,0.3791383219954696,0.3791383219954554,0.3791383219954696,0.3791383219954696,0.3791383219954554,0.3791383219954696,0.3791383219954696,0.3791383219954554,0.3791383219954696,0.3791383219954696,0.3791383219954554,0.3791383219954696,0.3791383219954696,0.3791383219954554,0.3791383219954696,0.3791383219954696,0.3791383219954554,0.3791383219954696,0.3791383219954696,0.3791383219954554,0.3791383219954696,0.3791383219954696,0.3791383219954554,0.3791383219954696,0.3791383219954696,0.3791383219954554,0.3791383219954696,0.3791383219954696,0.3791383219954554,0.3791383219954696,0.3791383219954696,0.3791383219954554,0.3791383219954696,0.3791383219954696,0.3791383219954554,0.3791383219954696,0.3791383219954696,0.3791383219954554,0.3791383219954696,0.3791383219954696,0.3791383219954554,0.3791383219954696,0.3791383219954696,0.3791383219954554,0.3791383219954696,0.3791383219954696,0.3791383219954554,0.3791383219954696,0.3791383219954696,0.3791383219954554,0.3791383219954696,0.3791383219954554,0.3791383219954696,0.3791383219954696,0.3791383219954554,0.3791383219954696,0.3791383219954696,0.3791383219954554,0.3791383219954696,0.3791383219954696,0.3791383219954554,0.3791383219954696,0.3791383219954696,0.3791383219954554,0.3791383219954696,0.3791383219954696,0.3791383219954554,0.3791383219954696,0.3791383219954696,0.3791383219954554,0.3791383219954696,0.3791383219954696,0.3791383219954554,0.3791383219954696,0.3791383219954696,0.3791383219954554,0.3791383219954696,0.3791383219954696,0.3791383219954554,0.3791383219954696,0.3791383219954696,0.3791383219954554,0.3791383219954696,0.3791383219954696,0.3791383219954554,0.3791383219954696,0.3791383219954696,0.3791383219954554,0.3791383219954696,0.3791383219954696,0.3791383219954554,0.3791383219954696,0.3791383219954696,0.3791383219954554,0.3791383219954696,0.3791383219954696,0.3791383219954554,0.3791383219954696,0.3791383219954696,0.3791383219954554,0.3791383219954696,0.3791383219954696,0.3791383219954554,0.3791383219954696,0.3791383219954696,0.3791383219954554,0.3791383219954696,0.3791383219954696,0.3791383219954554,0.3791383219954696,0.3791383219954696,0.3791383219954554,0.3791383219954696,0.3791383219954696,0.3791383219954554,0.3791383219954696,0.3791383219954696,0.3791383219954554,0.3791383219954696,0.3791383219954696,0.4049886621315153,0.48684807256235274],
        attackPatterns:[1,4,3,1,2,3,3,1,3,4,1,1,4,3,2,1,1,4,3,2,1,4,3,3,2,1,4,3,2,1,1,4,3,2,1,4,3,2,2,1,4,3,2,2,1,1,4,4,3,3,2,2,1,4,4,3,3,2,2,1,1,4,3,3,2,2,1,1,4,4,3,2,2,1,4,4,3,2,1,4,3,2,2,1,4,3,2,1,4,4,3,2,2,1,1,4,4,3,3,2,1,1,4,3,2,1,1,4,3,2,1,4,3,3,2,1,4,3,2,1,1,4,3,2,1,4,3,3,2,1,4,3,2,1,4,4,3,2,1,4,3,2,2,1,4,3,2,1,4,4,3,2,1,4,3,2,2,1,4,3,2,1,4,3,3,2,1,4,3,2,1,1,4,3,2,1,4,3,3,2,1,4,3,2,1,1,4,3,2,1,4,3,3,2,1,4,3,2,1,4,4,3,2,1,4,3,2,2,1,4,3,2,1,4,4,3,2,1,4,3,2,2,1,4,3,2,1,4,3,3,2,1,4,3,2,1,1,4,3,2,1,4,3,3,2,1,4,3,2,1,1,4,3,2,1,4,3,2,2,1,4,3,2,1,4,4,3,2,1,4,3,2,2,1,4,3,2,1,4,4,3,2,1,4,3,2,2,1,4,3,2,1,4,3,3,4,2],
        dialogue: [
            ["Another contender?"],
            ["When will you people learn..."],
            ["This is just a waste of your lives."],
            ["Ah, never mind. It doesn't matter to me."],
            ["I'm just here to keep the scum entertained"],
            ["You all come in here..."],
            ["with the same look in your eyes."],
            ["Desperation..."], 
            ["hope..."], 
            ["it's almost pitiful."],
            ["Let me guess"],
            ["you’ve got some noble reason to be here?"],
            ["A family to save?"],
            ["A village depending on you?"],
            ["I’ve heard it all before."],
            ["Hah, you're better than I expected!"],
            ["Whats your name Struggler?"],
            ["Let's see if you can actually get past me."],
            ["But let me warn you..."],
            ["even if you win, it doesn't mean anything."],
            ["Against *him*? You don't stand a chance."],
            ["Still, I suppose..."],
            ["It doesn’t hurt to let you dream."],
            ["Go ahead—show me what you’ve got!"]
          ],
        dialogueIntervall: [2,3,2,2,2,20,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
                      
          

        enemyCreationInterval: 500,
        distanceX : 500,
        distanceY : 500,
        speedMultiplier: 0.7
    },

    enemy2: {
        name: "EnemyName",  
        health: 100,                 
        attackPatterns:[2,4,2,3,2,3,4,2,1,1,3,4,4,1,1,3,1,3,2,4,3,2,2,3,1,2,2,1,3,2,1,3,2,4,3,1,4,3,2,4,2,1,3,2,1,3,2,4,3,1,2,1,4,3,1,4,2,1,4,2,1,3,2,4,3,1,4,2,1,3,2,4,3,2,4,3,1,4,2,1,4,2,1,3,2,4,3,2,4,3,1,4,2,1,4,2,1,3,2,4,3,2,4,3,1,4,2,1,4,2,1,3,2,4,3,1,4,3,1,4,2,1,3,2,4,3,2,4,3,1,4,2,1,3,2,4,3,2,4,3,1,4,2,1,4,2,1,3,2,4,3,2,4,3,1,4,2,1,4,2,1,3,2,4,3,2,4,3,1,4,2,1,4,2,1,3,2,4,3,1,4,3,1,4,2,1,3,2,4,3,2,4,3,1,4,2,1,3,2,4,3,2,4,3,1,4,2,1,4,2,1,3,2,4,3,2,4,3,1,4,2,1,4,2,1,3,2,4,3,2,4,3,1,4,2,1,4,2,1,1,1,1,4,3,3,1,4,2,1,4,2,1,3,2,4,3,1,4,2,1,3,2,1,3,2,1,3,2,4,2,1,4,2,1,4,2,1,3,1,4,3,1,4,2,1,3,2,1,3,2,4,2,4,3,2,4,3,1,4,2,1,4,2,1,3,2,4,3,2,4,3,1,4,2,1,3,2,1,3,2,4,3,1,4,2,1,3,2,1,3,2,4,3,1,4,2,1,4,2,1,3,2,4,3,2,4,3,1,4,2,1,4,2,1,3,2,4,3,2,4,3,1,4,2,1,4,2,1,3,2,4,3,2,4,3,1,4,2,1,3,2,1,3],
        timings:[0,0.30185941043083897,0.301859410430839,0.3018594104308391,0.313469387755102,0.3947392290249432,0.4411791383219954,0.45278911564625846,0.30185941043083897,0.3947392290249434,0.45278911564625846,0.44117913832199607,0.31346938775510136,0.3482993197278912,0.3482993197278912,0.4527891156462589,0.4411791383219956,0.4063492063492058,0.4063492063492067,0.3947392290249434,0.4063492063492058,0.3947392290249443,0.38312925170068013,0.37151927437641596,0.4411791383219956,0.4063492063492067,0.4411791383219956,0.38312925170068013,0.38312925170068013,0.3947392290249443,0.3947392290249425,0.3947392290249443,0.4063492063492049,0.3947392290249443,0.4063492063492067,0.3947392290249425,0.4063492063492067,0.3947392290249425,0.38312925170068013,0.38312925170068013,0.42956916099773323,0.4063492063492049,0.40634920634920846,0.3947392290249425,0.4063492063492049,0.39473922902494607,0.3947392290249425,0.3947392290249425,0.40634920634920846,0.3947392290249425,0.31346938775510225,0.3018594104308363,0.39473922902494607,0.3947392290249425,0.3947392290249425,0.40634920634920846,0.3947392290249425,0.4063492063492049,0.3947392290249425,0.39473922902494607,0.4063492063492049,0.3947392290249425,0.40634920634920846,0.3947392290249425,0.4063492063492049,0.39473922902494607,0.4063492063492049,0.3947392290249425,0.40634920634920846,0.3947392290249425,0.4063492063492049,0.3947392290249425,0.40634920634920846,0.3947392290249425,0.3947392290249425,0.40634920634920846,0.4063492063492049,0.3947392290249425,0.39473922902494607,0.4063492063492049,0.3947392290249425,0.40634920634920846,0.3947392290249425,0.4063492063492049,0.3947392290249425,0.4063492063492049,0.3947392290249496,0.3947392290249425,0.4063492063492049,0.3947392290249425,0.4063492063492049,0.3947392290249425,0.4063492063492049,0.3947392290249496,0.4063492063492049,0.3947392290249425,0.4063492063492049,0.3947392290249425,0.3947392290249425,0.406349206349212,0.3947392290249425,0.4063492063492049,0.3947392290249425,0.4063492063492049,0.3947392290249425,0.4063492063492049,0.3947392290249496,0.3947392290249425,0.4063492063492049,0.3947392290249425,0.4063492063492049,0.3947392290249425,0.406349206349212,0.3947392290249425,0.4063492063492049,0.3947392290249425,0.4063492063492049,0.3947392290249425,0.3947392290249425,0.406349206349212,0.3947392290249425,0.4063492063492049,0.3947392290249425,0.4063492063492049,0.3947392290249425,0.406349206349212,0.3947392290249425,0.3947392290249425,0.4063492063492049,0.3947392290249425,0.4063492063492049,0.3947392290249425,0.406349206349212,0.3947392290249425,0.4063492063492049,0.3947392290249425,0.4063492063492049,0.3947392290249425,0.406349206349212,0.3947392290249425,0.3947392290249425,0.4063492063492049,0.3947392290249425,0.4063492063492049,0.3947392290249425,0.406349206349212,0.3947392290249425,0.4063492063492049,0.3947392290249425,0.4063492063492049,0.3947392290249425,0.3947392290249425,0.406349206349212,0.3947392290249425,0.4063492063492049,0.3947392290249425,0.4063492063492049,0.3947392290249425,0.3947392290249425,0.406349206349212,0.4063492063492049,0.3947392290249425,0.3947392290249425,0.4063492063492049,0.3947392290249496,0.4063492063492049,0.3947392290249354,0.4063492063492049,0.3947392290249496,0.3947392290249496,0.4063492063492049,0.3947392290249354,0.4063492063492049,0.3947392290249496,0.4063492063492049,0.3947392290249496,0.4063492063492049,0.3947392290249354,0.4063492063492049,0.3947392290249496,0.4063492063492049,0.3947392290249496,0.3947392290249354,0.4063492063492049,0.3947392290249496,0.4063492063492049,0.3947392290249354,0.4063492063492049,0.3947392290249496,0.4063492063492049,0.3947392290249496,0.3947392290249354,0.4063492063492049,0.3947392290249496,0.4063492063492049,0.3947392290249496,0.4063492063492049,0.3947392290249354,0.4063492063492049,0.3947392290249496,0.4063492063492049,0.3947392290249496,0.4063492063492049,0.3947392290249354,0.3947392290249496,0.4063492063492049,0.3947392290249354,0.4063492063492191,0.3947392290249354,0.4063492063492049,0.3947392290249496,0.3947392290249354,0.4063492063492049,0.3947392290249496,0.4063492063492049,0.3947392290249496,0.4063492063492049,0.3947392290249354,0.4063492063492049,0.3947392290249496,0.4063492063492049,0.3947392290249496,0.3947392290249354,0.4063492063492049,0.3947392290249496,0.4063492063492049,0.3947392290249354,0.4063492063492191,0.3947392290249354,0.4063492063492049,0.3947392290249496,0.4063492063492049,0.3947392290249354,0.3947392290249496,0.4063492063492049,0.3947392290249496,0.4063492063492049,0.3947392290249354,0.4063492063492049,0.3947392290249496,0.34829931972788586,0.35990929705215535,0.35990929705215535,0.37151927437642485,0.38312925170068013,0.38312925170068013,0.4063492063492049,0.3947392290249354,0.3947392290249496,0.3947392290249354,0.3947392290249496,0.4063492063492049,0.4063492063492049,0.4063492063492049,0.3947392290249496,0.4063492063492049,0.3947392290249354,0.3947392290249496,0.4063492063492049,0.4063492063492049,0.3947392290249496,0.4063492063492049,0.3947392290249354,0.3947392290249496,0.4063492063492049,0.3947392290249496,0.3947392290249354,0.4063492063492049,0.3947392290249496,0.4063492063492049,0.4063492063492049,0.3947392290249496,0.3947392290249354,0.4063492063492049,0.3947392290249496,0.3947392290249354,0.3947392290249496,0.4063492063492049,0.4063492063492049,0.4063492063492049,0.3947392290249496,0.3947392290249354,0.4063492063492049,0.3947392290249496,0.4063492063492049,0.4063492063492049,0.3947392290249496,0.3947392290249354,0.4063492063492049,0.3947392290249496,0.3947392290249496,0.3018594104308363,0.3018594104308363,0.3947392290249496,0.4063492063492049,0.3947392290249354,0.4063492063492049,0.3947392290249496,0.3947392290249354,0.4063492063492049,0.3947392290249496,0.4063492063492049,0.3947392290249496,0.4063492063492049,0.3947392290249354,0.4063492063492049,0.3947392290249496,0.3947392290249496,0.4063492063492049,0.3947392290249354,0.4063492063492049,0.3947392290249496,0.4063492063492049,0.3947392290249496,0.4063492063492049,0.3947392290249354,0.4063492063492049,0.3947392290249496,0.3947392290249354,0.4063492063492191,0.3947392290249354,0.4063492063492049,0.3947392290249496,0.4063492063491907,0.39473922902496383,0.4063492063492049,0.3947392290249354,0.4063492063492049,0.3947392290249354,0.39473922902496383,0.4063492063492049,0.3947392290249354,0.4063492063492049,0.3947392290249354,0.4063492063492049,0.39473922902496383,0.4063492063492049,0.3947392290249354,0.3947392290249354,0.4063492063492049,0.4063492063492049,0.39473922902496383,0.3947392290249354,0.4063492063492049,0.3947392290249354,0.4063492063492049,0.39473922902496383,0.4063492063492049,0.3947392290249354,0.3947392290249354,0.4063492063492049,0.4063492063492049,0.39473922902496383,0.3947392290249354,0.4063492063492049,0.3947392290249354,0.4063492063492049,0.3947392290249354,0.4063492063492333,0.3947392290249354,0.4063492063492049,0.3947392290249354,0.3947392290249354,0.4063492063492049,0.39473922902496383,0.4063492063492049,0.3947392290249354,0.4063492063492049,0.3947392290249354,0.4063492063492049,0.39473922902496383,0.3947392290249354,0.4063492063492049,0.3947392290249354,0.4063492063492049,0.39473922902496383,0.4063492063492049,0.3947392290249354,0.4063492063492049,0.3947392290249354,0.4063492063492049,0.39473922902496383,0.3947392290249354,0.4063492063492049],        
        dialogue: ["asd"],
        enemyCreationInterval: 500,
        distanceX : 500,
        distanceY : 500,
        speedMultiplier: 0.7
    },
    
    enemy3: {
        name: "EnemyName",  
        health: 100,     
        attackPatterns:[3,3,2,1,4,4,3,2,1,1,4,3,2,1,4,4,3,2,1,4,4,3,2,1,1,3,3,2,1,1,4,3,2,1,4,4,3,2,1,1,4,3,2,1,4,4,3,2,1,1,4,3,2,1,1,4,3,2,1,4,4,3,2,1,1,4,3,2,1,1,4,3,2,1,4,4,3,2,1,1,4,3,2,2,1,4,3,2,2,1,4,3,2,1,1,4,3,2,1,4,4,3,2,1,1,4,3,2,1,1,4,3,2,2,1,4,3,3,1,1,4,3,2,2,1,4,3,2,2,1,4,3,3,1,1,4,3,2,2,1,4,3,2,2,1,4,3,2,2,1,4,3,2,2,1,4,3,3,2,1,4,3,2,2,1,4,3,2,2,1,4,3,3,2,1,4,3,2,2,1,4,3,2,2,1,4,3,3,2,1,4,3,2,2,1,4,3,3,2,1,4,3,3,2,1,4,4,3,2,1,4,3,3,2,1,4,3,3,2,1,4,4,3,2,1,4,3,3,2,1,4,3,3,2,1,4,3,3,2,1,4,3,3,2,1,4,4,3,2,1,4,4,3,2,1,4,3,3,2,1,4,4,3,2,1,4,3,3,2,1,4,4,3,2,1,4,4,3,2,1,1,4,3,2,1,4,4,3,2,1,4,4,3,2,1,1,4,3,2,1,4,4,3,2,1,1,4,3,2,1,1,4,3,2,1,4,4,3,2,1,1,4,3,2,1,1,4,3,2,1,4,4,3,2,1,1,4],
        timings:[0,0.4992290249433107,0.4992290249433107,0.4992290249433107,0.4992290249433107,0.4992290249433111,0.49922902494331023,0.49922902494331023,0.4992290249433111,0.49922902494331023,0.4992290249433111,0.49922902494331023,0.4992290249433111,0.4992290249433111,0.49922902494330934,0.5108390022675753,0.49922902494330934,0.4992290249433111,0.4992290249433111,0.4992290249433111,0.49922902494330934,0.4992290249433111,0.4992290249433111,0.49922902494330934,0.4992290249433111,0.4992290249433111,0.5108390022675735,0.4992290249433111,0.4992290249433111,0.48761904761904695,0.4992290249433111,0.5108390022675735,0.4992290249433111,0.4992290249433111,0.49922902494330756,0.4992290249433111,0.4992290249433111,0.4992290249433111,0.4992290249433111,0.4992290249433111,0.4992290249433111,0.4992290249433111,0.49922902494330756,0.4992290249433111,0.5108390022675735,0.4992290249433111,0.4992290249433111,0.4992290249433111,0.4992290249433111,0.4992290249433111,0.4992290249433111,0.49922902494330756,0.4992290249433111,0.4992290249433111,0.4992290249433111,0.4992290249433111,0.4992290249433111,0.4992290249433111,0.5108390022675735,0.4992290249433111,0.49922902494330756,0.49922902494331467,0.4992290249433111,0.4992290249433111,0.499229024943304,0.4992290249433111,0.4992290249433111,0.4992290249433111,0.4992290249433111,0.4992290249433111,0.4992290249433111,0.5108390022675735,0.4992290249433111,0.4992290249433111,0.4992290249433111,0.4992290249433111,0.4992290249433111,0.4992290249433111,0.4992290249433111,0.4992290249433111,0.4992290249433111,0.499229024943304,0.4992290249433111,0.4992290249433111,0.4992290249433111,0.4992290249433111,0.4992290249433111,0.4992290249433111,0.4992290249433111,0.4992290249433111,0.5108390022675735,0.4992290249433111,0.4992290249433111,0.4992290249433111,0.4992290249433111,0.4992290249433111,0.4992290249433111,0.4992290249433111,0.499229024943304,0.5108390022675806,0.499229024943304,0.48761904761904873,0.4992290249433111,0.4992290249433111,0.5108390022675735,0.4992290249433111,0.4992290249433111,0.4992290249433111,0.4992290249433111,0.4992290249433111,0.4992290249433111,0.4992290249433111,0.4992290249433111,0.4992290249433111,0.4992290249433111,0.499229024943304,0.4992290249433111,0.4992290249433111,0.4992290249433111,0.5108390022675735,0.4992290249433111,0.4992290249433111,0.4992290249433111,0.4992290249433111,0.4992290249433111,0.4992290249433111,0.499229024943304,0.4992290249433182,0.499229024943304,0.4992290249433182,0.499229024943304,0.4992290249433182,0.499229024943304,0.4992290249433182,0.5108390022675735,0.499229024943304,0.4992290249433182,0.499229024943304,0.4992290249433182,0.499229024943304,0.4992290249433182,0.499229024943304,0.499229024943304,0.4992290249433182,0.499229024943304,0.4992290249433182,0.5108390022675735,0.499229024943304,0.4992290249433182,0.48761904761904873,0.499229024943304,0.5108390022675735,0.4992290249433182,0.499229024943304,0.4992290249433182,0.499229024943304,0.4992290249433182,0.499229024943304,0.499229024943304,0.4992290249433182,0.499229024943304,0.4992290249433182,0.5108390022675735,0.499229024943304,0.4992290249433182,0.499229024943304,0.4992290249433182,0.499229024943304,0.4992290249433182,0.499229024943304,0.4992290249433182,0.499229024943304,0.4992290249433182,0.499229024943304,0.4992290249433182,0.499229024943304,0.499229024943304,0.4992290249433182,0.5108390022675735,0.499229024943304,0.4992290249433182,0.499229024943304,0.4992290249433182,0.499229024943304,0.4992290249433182,0.499229024943304,0.4992290249433182,0.499229024943304,0.4992290249433182,0.499229024943304,0.4992290249433182,0.5108390022675735,0.499229024943304,0.499229024943304,0.4992290249433182,0.499229024943304,0.4992290249433182,0.499229024943304,0.4992290249433182,0.499229024943304,0.4992290249433182,0.499229024943304,0.4992290249433182,0.499229024943304,0.4992290249433182,0.499229024943304,0.4992290249433182,0.499229024943304,0.4992290249433182,0.499229024943304,0.5108390022675735,0.499229024943304,0.4992290249433182,0.499229024943304,0.4992290249433182,0.499229024943304,0.4992290249433182,0.499229024943304,0.4992290249433182,0.499229024943304,0.4992290249433182,0.499229024943304,0.4992290249433182,0.499229024943304,0.4992290249433182,0.499229024943304,0.5108390022675735,0.499229024943304,0.4992290249433182,0.499229024943304,0.5108390022675735,0.4992290249433182,0.499229024943304,0.48761904761904873,0.4992290249433182,0.499229024943304,0.4992290249433182,0.5108390022675735,0.499229024943304,0.4992290249433182,0.499229024943304,0.4992290249433182,0.499229024943304,0.4992290249433182,0.499229024943304,0.499229024943304,0.4992290249433182,0.499229024943304,0.4992290249433182,0.499229024943304,0.4992290249433182,0.499229024943304,0.4992290249433182,0.499229024943304,0.499229024943304,0.5108390022675735,0.49922902494333243,0.499229024943304,0.499229024943304,0.499229024943304,0.49922902494333243,0.499229024943304,0.499229024943304,0.499229024943304,0.499229024943304,0.49922902494333243,0.5108390022675735,0.499229024943304,0.499229024943304,0.499229024943304,0.49922902494333243,0.499229024943304,0.499229024943304,0.499229024943304,0.49922902494333243,0.499229024943304,0.499229024943304,0.499229024943304,0.499229024943304,0.49922902494333243,0.499229024943304,0.499229024943304,0.499229024943304,0.49922902494333243,0.499229024943304,0.5108390022675735,0.499229024943304,0.499229024943304,0.49922902494333243,0.499229024943304,0.499229024943304,0.499229024943304,0.49922902494333243,0.499229024943304,0.499229024943304,0.499229024943304,0.499229024943304,0.49922902494333243,0.499229024943304,0.499229024943304,0.5108390022675735,0.499229024943304,0.49922902494333243,0.499229024943304,0.499229024943304,0.499229024943304,0.49922902494333243,0.499229024943304,0.499229024943304,0.499229024943304,0.49922902494333243,0.499229024943304,0.499229024943304,0.499229024943304,0.5108390022675735,0.499229024943304,0.49922902494333243,0.499229024943304,0.499229024943304,0.499229024943304,0.49922902494333243,0.499229024943304,0.499229024943304,0.499229024943304,0.49922902494333243,0.499229024943304,0.499229024943304,0.499229024943304,0.5108390022675735,0.49922902494333243,0.499229024943304,0.499229024943304,0.499229024943304,0.499229024943304,0.49922902494333243,0.499229024943304,0.499229024943304,0.499229024943304],                   
        dialogue: [
            ["Another contender?"],
            ["When will you people learn..."],
            ["This is just a waste of your lives."],
            ["Ah, never mind. It doesn't matter to me."],
            ["I'm just here to keep the scum entertained"],
            ["You all come in here..."],
            ["with the same look in your eyes."],
            ["Desperation..."], 
            ["hope..."], 
            ["it's almost pitiful."],
            ["Let me guess"],
            ["you’ve got some noble reason to be here?"],
            ["A family to save?"],
            ["A village depending on you?"],
            ["I’ve heard it all before."],
            ["Hah, you're better than I expected!"],
            ["Whats your name Struggler?"],
            ["Let's see if you can actually get past me."],
            ["But let me warn you..."],
            ["even if you win, it doesn't mean anything."],
            ["Against *him*? You don't stand a chance."],
            ["Still, I suppose..."],
            ["It doesn’t hurt to let you dream."],
            ["Go ahead—show me what you’ve got!"]
          ],
        dialogueIntervall: [2,3,2,2,2,20,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
                      
          

        enemyCreationInterval: 500,
        distanceX : 500,
        distanceY : 500,
        speedMultiplier: 0.7
    },
    
    enemy4: {
        name: "Tengri",  
        health: 100,                 
        attackPatterns: [
            [1,3,2,4,1,2,1,3,2,3,2,4,1],
            [1,2,3,3,3,3,3],
            [4,4,4,4,4,4,4,4,4]
        ],
        enemyCreationInterval: 500,
        distanceX : 500,
        distanceY : 500,
        speedMultiplier: 0.7
    },
    

    game: {
        screenWidth: 1366,
        screenHeight: 768,
        stages: [1,2,3,4],
        textGap: 30,
    },

    player: {
        health: 5000,
        speed: 5,
        attackPower: 20,
    },
    
    mainScreen:{
        screenID: 0,
        top: "Ergenekon",
        text: [[""]],
        buttons: [
            {
                label: "Start",
                action: () => {
                    console.log("Game Started!");
                    global.currentScreen=5;
                }
            },
            {
                label: "Settings",
                action: () => {
                    console.log("Settings Opened!");
                    global.gameMusic.startMusic();
                }
            },
            {
                label: "Credits",
                action: () => {
                    console.log("Credits Displayed!");
                    global.gameMusic.stopMusic();
                }
            },
        ],
        font: "mania",
        size: 30,
        width: 200,
        height: 80,
        x: 100,
        y: 300,
        textY: 300,
        gap: 100,
        textX: 0
    },

    pauseScreen:{
        text: ["a","b"],
        buttons: ["Resume","Settings","Credits"],
        font: "mania",
        size: 30,
        width: 100,
        height: 100,
        x: 100,
        y: 100,
        gap: 2000,
        textX: 0
    },

    gameOver:{
        screenID: 2,
        top: "Game Over!",
        text: [["Bevor du leidest, besser du meidest."],["– Friedrich Schiller, 2017"]],
        buttons: [
            {
                label: "Try Again!",
                action: () => {
                    console.log("test");
                    global.allGameObjects = [];
                    global.enemyCounter = 0;
                    global.enemyAmount = 0;
                    global.hitCounter = 0;
                    global.enemy = global.enemyArray[0];
                    global.hp = gs.player.health;
                    global.isMouseClicked = false;
                    global.currentScreen = 1;
                    global.currentBoss = 0;
                    global.currentScreenValue = gs.mainScreen;
                    console.log("Restart!");
                    global.ctx.clearRect(0, 0, global.canvas.width, global.canvas.height);
                    global.gameMusic.startMusic();
                }
            },
            {
                label: "Title Screen",
                action: () => {
                    console.log("Title Screen!");
                    global.allGameObjects = [];
                    global.enemyCounter = 0;
                    global.enemyAmount = 0;
                    global.hitCounter = 0;
                    global.enemy = global.enemyArray[0];
                    global.hp = gs.player.health;
                    global.isMouseClicked = false;
                    global.currentScreen = 0;
                    global.currentBoss = 0;
                    global.currentScreenValue = gs.mainScreen;
                    console.log("Restart!");
                }
            },
            {
                label: "Stats",
                action: () => {
                    console.log("Credits Displayed!");
                }
            },
        ],
        font: "mania",
        size: 30,
        width: 200,
        height: 80,
        x: 100,
        y: 350,
        textY: 500,
        gap: 100,
        color: "red",
        textX: 0
    },
    explanation:{
        screenID: 5,
        top: "",
        text: [["Your village is dying..."],["Ravaged by a terrible disease, the only hope lies in the colosseum of the nobles, where the cure"],["is awarded to the victor. But there's a catch no one has ever won. Four deadly fighters await..."],["Time is against you. The illness has already begun to steal your memories, and each passing moment "],["brings you closer to losing it all. With no choice but to fight."],["Will you risk everything for a chance to save your village?"],["Or will the colosseum be your end?"]],
        buttons: [{
            label: "Proceed!",
            action: () => {

                console.log("Game Started!");
                global.currentScreen=1;
                global.gameMusic.startMusic();
            }
        },],
        font: "mania",
        size: 25,
        width: 300,
        height: 80,
        x: 0,
        y: 650,
        textY: 900,
        gap: 100,
        color: "red",
        textX: -500,
        intervall: 1000,
    },
        explanation:{
        screenID: 5,
        top: "",
        text: [["Your village is dying..."],["Ravaged by a terrible disease, the only hope lies in the colosseum of the nobles, where the cure"],["is awarded to the victor. But there's a catch no one has ever won. Four deadly fighters await..."],["Time is against you. The illness has already begun to steal your memories, and each passing moment "],["brings you closer to losing it all. With no choice but to fight."],["Will you risk everything for a chance to save your village?"],["Or will the colosseum be your end?"]],
        buttons: [{
            label: "Proceed!",
            action: () => {

                console.log("Game Started!");
                global.currentScreen=1;
                global.gameMusic.startMusic();
            }
        },],
        font: "mania",
        size: 25,
        width: 300,
        height: 80,
        x: 0,
        y: 650,
        textY: 900,
        gap: 100,
        color: "red",
        textX: -500,
        intervall: 1000,
    },
};
