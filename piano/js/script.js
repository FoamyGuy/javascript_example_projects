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
var piano = Synth.createInstrument('piano');

KEYCODE_TO_DIV = {
	65: document.querySelector("#C4-note"),
	83: document.querySelector("#D-note"),
	68: document.querySelector("#E-note"),
	70: document.querySelector("#F-note"),
	71: document.querySelector("#G-note"),
	72: document.querySelector("#A-note"),
	74: document.querySelector("#B-note"),
	75: document.querySelector("#C5-note")
}

KEYCODE_TO_NOTE = {
	65: {'note': 'C', 'octave': 4},
	83: {'note': 'D', 'octave': 4},
	68: {'note': 'E', 'octave': 4},
	70: {'note': 'F', 'octave': 4},
	71: {'note': 'G', 'octave': 4},
	72: {'note': 'A', 'octave': 4},
	74: {'note': 'B', 'octave': 4},
	75: {'note': 'C', 'octave': 5}
}


window.onkeydown = function(e){
	if (e.keyCode in KEYCODE_TO_DIV){
		var $div_for_note = KEYCODE_TO_DIV[e.keyCode];
		$div_for_note.classList.add("pressed-key");
		
		var note_to_play = KEYCODE_TO_NOTE[e.keyCode];
		console.log(note_to_play.note + " " + note_to_play.octave);
		piano.play(note_to_play.note, note_to_play.octave,2);
	}
}

window.onkeyup = function(e){
	console.log(e.keyCode);
	if (e.keyCode in KEYCODE_TO_NOTE){

		var $div_for_note = KEYCODE_TO_DIV[e.keyCode];
		$div_for_note.classList.remove("pressed-key");
	}
	
};
