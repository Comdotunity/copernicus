console.log('Welcome to the real world');

// Com.unity App, Local hOS;

const express = require('express');
const cuApp = express();
cuApp.use(express.static('views'))

cuApp.listen(8080, function() {
	console.log("serving" + __dirname)
	console.log("listening 8080...")
});

cuApp.get('/', (req, res) => {
	console.log("serving view")
	res.sendFile(__dirname + '/index.html')
});