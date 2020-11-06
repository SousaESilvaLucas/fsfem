const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('Good Job!');
});

app.get('/teapot', (req, res) => {
	res.set({
		'x-Hello': 'World'
	});
	res.status(418);
	res.send("I'm a teapot!");
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
