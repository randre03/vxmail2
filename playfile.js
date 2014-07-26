/**
 * Created by Roger on 7/25/2014.
 * This requires that mplayer be installed
 */
var Media = require('simple-mplayer');

var music = new Media('./dev_assets/voice-message.wav');
music.play(); // send "-loop 0" to MPlayer to loop the soundtrack forever
