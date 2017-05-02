const express = require('express');
const serveIndex = require('serve-index');
const path = require('path');
const app = express();
const PORT = 9000;

app.use('/', serveIndex('src', {icons: true}));

app.use(express.static(path.join(__dirname, 'src')));

app.listen(PORT, () => {
    console.log('Demo is served at ' + '\033[36mhttp://localhost:' + PORT + '\033[39m');
});