export class Music{
    constructor(musicHtmlID){
        this.music = document.getElementById(musicHtmlID);
    }

    startMusic = function () {
        this.music.play();
      }
      // Play the music when the game starts
    hitStart = function () {
        this.music.currentTime = 0
        this.music.play();
    }
    
    // Pause the music when the game is paused
    stopMusic = function () {
        this.music.pause();
        this.music.currentTime = 0
    }

    setMusic = function (musicHtmlID){
        this.music = document.getElementById(musicHtmlID);
    }

} 