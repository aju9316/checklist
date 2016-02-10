var express = require('express');


const app = express();

app.use(express.static('node_modules/bootstrap/dist'));
app.use(express.static('public'));
app.use(express.static('web'));

app.get('/', function (req, res) {
	res.sendFile('/index.html');
});

app.listen(3000)
console.log('server started port 3000');