const path = require('path');
const express = require('express');
const port = 3000;
const app = express();

express.static.mime.types['wasm'] = 'application/wasm';

app.use(express.static('dist'));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/dist/index.html')));

app.listen(port, () => console.log(`Listening on port ${port}`));
