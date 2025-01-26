export class Music {

    constructor(musicHtmlID, volume) {
        this.music = document.getElementById(musicHtmlID);
        if (!this.music) {
            throw new Error(`Element with ID '${musicHtmlID}' not found.`);
        }
        this.music.volume = volume;
    }

    
    //Starts playing the music from the beginning.
    startMusic() {
        this.music.play();
    }

    hitMusic() {
        this.music.currentTime = 0;
        this.music.play();
    }
    
    //Stops the music and resets its playback position.
    stopMusic() {
        this.music.pause();
        this.music.currentTime = 0;
    }

    
    //Sets a new HTML audio element by its ID.
    //@param {string} musicHtmlID - The ID of the new HTML audio element.
    setMusic(musicHtmlID) {
        const newMusic = document.getElementById(musicHtmlID);
        if (!newMusic) {
            throw new Error(`Element with ID '${musicHtmlID}' not found.`);
        }
        this.music = newMusic;
    }
}
