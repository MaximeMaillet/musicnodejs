/**
 * Created by MaximeMaillet on 16/07/2017.
 */



var source = new EventSource('http://localhost:8888/listen');
var isPlaying = false;
var currentAudio = '';

source.addEventListener('error', function(event) {
	if (event.eventPhase == EventSource.CLOSED) {
		console.log('close');
	}
}, false);

source.addEventListener('message', function(msg) {
	var data = JSON.parse(msg.data);

	if(data.event === 'new') {
		var audio = new Audio('music/'+data.id);

		if(!isPlaying) {
			console.log('playing');
			isPlaying = true;
			currentAudio = data.id;
			audio.play();
		}

		audio.addEventListener('ended', function(err) {
			console.log('end');
			isPlaying = false;

			var xmlHttp = new XMLHttpRequest();
			xmlHttp.open( "DELETE", '/music/'+currentAudio, false ); // false for synchronous request
			xmlHttp.send( null );
			return xmlHttp.responseText;
		});
	}

}, false);