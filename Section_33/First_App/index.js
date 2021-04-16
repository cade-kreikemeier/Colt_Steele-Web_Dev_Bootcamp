const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send('This is the home page!!!');
});

app.get('/r/:subreddit', (req, res) => {
	const subreddit = req.params;
	res.send(`<h1>Browsing the ${subreddit} subreddit.</h1>`);
});

app.get('/r/:subreddit/:postID', (req, res) => {
	const { subreddit, postID } = req.params;
	res.send(
		`<h1>Viewing Post ID:${postID} on the ${subreddit} subreddit.</h1>`
	);
});

app.post('/cats', (req, res) => {
	res.send('Post request to /cats. This is different than a get request!');
});

app.get('/cats', (req, res) => {
	res.send('MEOW!');
});

app.get('/dogs', (req, res) => {
	res.send('WOOF!');
});

app.get('/search', (req, res) => {
	const { q } = req.query;
	if (!q) {
		res.send('Nothing found if nothing searched.');
	}
	res.send(`<h1>Search results for: ${q}</h1>`);
});

app.get('*', (req, res) => {
	res.send(`I don't know that path!`);
});

app.listen(8080, () => {
	console.log('LISTENING ON PORT 8080!');
});
