const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

const path = require('path');
const buildPath = path.join(__dirname, '..', 'build');

app.use(express.static(buildPath));

// For managing SPA routes
app.get(/.*/, (req, res) => {
	res.sendFile(path.join(buildPath, 'index.html'));
});

app.listen(port, () => {
	console.log(`Server is up on port ${port}!`);
});
