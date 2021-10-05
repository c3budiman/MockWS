const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:8080');

ws.on('open', function open() {
	var response = {
		"message":
			"Anjay Surinjay"
	}


	ws.send('gela' + JSON.stringify(response), {}, (tes) => {
		console.log('callback');
	});
	ws.on('message', function incoming(message) {
		console.log('received from server: %s', message);
	});
});

// ws.on('message', function incoming(data) {
// console.log(data);
// });
