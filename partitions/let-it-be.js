/**
 * Created by MaximeMaillet on 16/07/2017.
 */

'use strict';

const scribble = require('scribbletune');

module.exports = scribble.clip({
	notes: [
		'C#maj', 'C#maj', 'G#maj', 'G#maj', 'A#min', 'A#min', 'F#maj', 'F#maj',
		'C#maj', 'C#maj', 'G#maj', 'G#maj', 'F#maj', 'F#maj', 'C#maj', 'C#maj',
		'C#maj', 'C#maj', 'G#maj', 'G#maj', 'A#min', 'A#min', 'F#maj', 'F#maj',
		'C#maj', 'C#maj', 'G#maj', 'G#maj', 'F#maj', 'F#maj', 'C#maj', 'C#maj',
		'A#min', 'A#min', 'G#maj', 'G#maj', 'F#maj', 'F#maj', 'C#maj', 'C#maj',
		'C#maj', 'C#maj', 'G#maj', 'G#maj', 'F#maj', 'F#maj', 'C#maj', 'C#maj'
	],
	pattern:
	'x-----'.repeat(8)+
	'x-----'.repeat(8)+
	'x-----'.repeat(8)+
	'x-----'.repeat(8)+
	'x-----'.repeat(8)+
	'x-----'.repeat(8)
});