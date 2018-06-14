/*
		audiosynth.js - a thrid party module used for playing musical notes.
		find out more about it here: http://keithwhor.github.io/audiosynth/
		
		for this example the importants bits to know are this:
		
		Synth.createInstrument('piano') - Creates a piano object. that we can use to play notes.
		
		piano.play(note, octave, duration) - Generates the note waveform and plays it.
			paramaters: 
				note - one of ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'A#', 'C#', 'D#', 'F#', 'G#']
				octave - one of [3, 4, 5]
				duration - time in seconds the note should be held
*/
// audiosynth piano object. It allows us to play sounds.
var piano = Synth.createInstrument('piano');

// array of objects. Each object represents a note to play, the octave to play it in, 
// the duration it lasts, and the delay to wait before playing it.
var twinkle_song = [
    {'note': 'C', 'octave': 4, 'length': 2, 'delay_before': .7},
    {'note': 'C', 'octave': 4, 'length': 2, 'delay_before': .7},
    {'note': 'G', 'octave': 4, 'length': 2, 'delay_before': .7},
    {'note': 'G', 'octave': 4, 'length': 2, 'delay_before': .7},
    {'note': 'A', 'octave': 4, 'length': 2, 'delay_before': .7},
    {'note': 'A', 'octave': 4, 'length': 2, 'delay_before': .7},
    {'note': 'G', 'octave': 4, 'length': 2, 'delay_before': 1.4},
    
    {'note': 'F', 'octave': 4, 'length': 2, 'delay_before': .7},
    {'note': 'F', 'octave': 4, 'length': 2, 'delay_before': .7},
    {'note': 'E', 'octave': 4, 'length': 2, 'delay_before': .7},
    {'note': 'E', 'octave': 4, 'length': 2, 'delay_before': .7},
    {'note': 'D', 'octave': 4, 'length': 2, 'delay_before': .7},
    {'note': 'D', 'octave': 4, 'length': 2, 'delay_before': .7},
    {'note': 'C', 'octave': 4, 'length': 2, 'delay_before': 1.4},
    
    {'note': 'G', 'octave': 4, 'length': 2, 'delay_before': .7},
    {'note': 'G', 'octave': 4, 'length': 2, 'delay_before': .7},
    {'note': 'F', 'octave': 4, 'length': 2, 'delay_before': .7},
    {'note': 'F', 'octave': 4, 'length': 2, 'delay_before': .7},
    {'note': 'E', 'octave': 4, 'length': 2, 'delay_before': .7},
    {'note': 'E', 'octave': 4, 'length': 2, 'delay_before': .7},
    {'note': 'D', 'octave': 4, 'length': 2, 'delay_before': 1.4},
    
    {'note': 'G', 'octave': 4, 'length': 2, 'delay_before': .7},
    {'note': 'G', 'octave': 4, 'length': 2, 'delay_before': .7},
    {'note': 'F', 'octave': 4, 'length': 2, 'delay_before': .7},
    {'note': 'F', 'octave': 4, 'length': 2, 'delay_before': .7},
    {'note': 'E', 'octave': 4, 'length': 2, 'delay_before': .7},
    {'note': 'E', 'octave': 4, 'length': 2, 'delay_before': .7},
    {'note': 'D', 'octave': 4, 'length': 2, 'delay_before': 1.4},
    
    {'note': 'C', 'octave': 4, 'length': 2, 'delay_before': .7},
    {'note': 'C', 'octave': 4, 'length': 2, 'delay_before': .7},
    {'note': 'G', 'octave': 4, 'length': 2, 'delay_before': .7},
    {'note': 'G', 'octave': 4, 'length': 2, 'delay_before': .7},
    {'note': 'A', 'octave': 4, 'length': 2, 'delay_before': .7},
    {'note': 'A', 'octave': 4, 'length': 2, 'delay_before': .7},
    {'note': 'G', 'octave': 4, 'length': 2, 'delay_before': 1.4},
    
    {'note': 'F', 'octave': 4, 'length': 2, 'delay_before': .7},
    {'note': 'F', 'octave': 4, 'length': 2, 'delay_before': .7},
    {'note': 'E', 'octave': 4, 'length': 2, 'delay_before': .7},
    {'note': 'E', 'octave': 4, 'length': 2, 'delay_before': .7},
    {'note': 'D', 'octave': 4, 'length': 2, 'delay_before': .7},
    {'note': 'D', 'octave': 4, 'length': 2, 'delay_before': .7},
    {'note': 'C', 'octave': 4, 'length': 2, 'delay_before': .7},
];

// variable to store the current note index in the song
var cur_note = 0;


function play_cur_note(){
	// log for debugging
    console.log(song[cur_note]['note'], song[cur_note]['octave'], song[cur_note]['length']);
	
	// lookup the note, octave, and length using cur_note as the index within the song array.
	// play the note with the piano object.
    piano.play(song[cur_note]['note'], song[cur_note]['octave'], song[cur_note]['length']);
	
	// increment cur_note so the next call to play_cur_note() will play the next note in the song
    cur_note++;
	
	// if there are still more notes to play
    if(cur_note < song.length){
		// set a timeout delay to call play_cur_note again after delaying for the time specified
		// in the object from the song array.
        setTimeout(function(){
            play_cur_note()
        }, song[cur_note-1]['delay_before'] * 1000);
    }else{
		// reset cur_note to 0 incase we want to play another song afterward.
        cur_note = 0;
    }
}
// set the song
song = twinkle_song;

// start the song by calling play_cur_note() for the first time.
play_cur_note();