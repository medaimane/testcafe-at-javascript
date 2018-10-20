const express = require('express');
const path = require('path');

// Init app
const app = express();

// Static files
app.use('/', express.static(path.join(`${__dirname}/app`)));

// Home route
// app.get('/', (req, res) => {
//     res.sendFile(path.join(`${__dirname}/app/index.html`));
// });

// Start server
app.listen(3000, _ => console.log('Server started on localhost:3000'));
