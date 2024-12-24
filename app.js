const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to your first Node.js App!');
});

app.get('/about', (req, res) => {
    res.send('This is a simple Node.js application for GitHub practice and devops.');
});

const port = 3000;
app.listen(port, () => {
    console.log(`App running at http://localhost:${port}`);
});
