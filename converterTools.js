/**
 * Created by MaximeMaillet on 16/07/2017.
 */
const scribble = require('scribbletune');
const fs = require('fs');
const uuidv1 = require('uuid/v1');
const { exec }= require('child_process');

module.exports.partitionToMP3 = function(obj) {

	let name = uuidv1();
	var midFile = './mids/'+name+'.mid';
	var mp3File = './musics/'+name+'.mp3';

	// Generate MIDI file
	scribble.midi(obj, midFile);
	// Convert to MP3
	exec('timidity '+midFile+' -Ow -o '+mp3File);
	// Delete MIDI file
	setTimeout(function() {
		fs.unlink(midFile, function(err) {
			if(err) {
				console.log(err);
			}
		});
	}, 5000);
};