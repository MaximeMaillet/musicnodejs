var express = require('express');
var app = express();
const fs = require('fs');
var path = require('path');

/**
 * Listen for new MP3 music
 */
app.get('/listen', function(req, res) {
	req.socket.setTimeout(120000); // 2min
	res.writeHead(200, {
		'Content-Type': 'text/event-stream',
		'Cache-Control': 'no-cache',
		'Connection': 'keep-alive'
	});
	res.write('\n');

	var refreshIntervalId = setInterval(function() {
		console.log('ping');
		res.write('data: '+ JSON.stringify({'event': 'ping'}) +' \n\n');
	}, 90000);

	var refreshMusic = setInterval(function() {

		fs.readdir('./musics', (err, files) => {
			files.forEach(file => {

				var extension = path.extname(file);
				if(extension === '.mp3') {
					res.write('data: '+ JSON.stringify({event: 'new', id: file}) +' \n\n');
				}
			});
		})

	}, 1000);

	req.on('close', function() {
		console.log('close');
		clearInterval(refreshMusic);
		clearInterval(refreshIntervalId);
		res.write('data: '+ JSON.stringify({event: 'disconnect'}) +' \n\n');
		res.end();
	});
});

/**
 * Delete current music for work
 */
app.delete('/music/:id', function(req, res) {

	var dir = __dirname+'/musics/'+req.params.id;
	fs.unlink(dir, function(err) {
		if(err) {
			console.log(err);
		}
		console.log('delete');
	});

	res.send({});
});

/**
 * Send MP3 music
 */
app.use('/music', express.static(__dirname+'/musics'));

/**
 * For client
 */
app.use('/', express.static(__dirname+'/client'));

app.listen(8888);