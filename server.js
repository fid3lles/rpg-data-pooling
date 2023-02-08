const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

const agents = [];

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

app.use('/', express.static('public'));

app.post('/userinfo', (req, res) => {
    const user = req.body;
    agents.push(user);
    console.log(`User enviado: ${user}`);
    res.send('User is added to the database');
});

app.get('/userinfo', (req, res) => {
    res.json(agents);
});