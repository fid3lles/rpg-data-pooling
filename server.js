require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const baseURI = process.env.API_BASE_URI || "http://localhost";
const port = process.env.PORT || 3000;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Servidor rodando em ${baseURI}:${port}`);
});

app.use('/', express.static('public'));

var agents = [
    {
        id:'felipe-consolas',
        hp:'',
        san: '',
        ep: ''
    },
    {
        id:'angelina-gomes',
        hp:'',
        san: '',
        ep: ''
    },
    {
        id:'fred-biggins',
        hp:'',
        san: '',
        ep: ''
    },
    {
        id:'raul-cervero',
        hp:'',
        san: '',
        ep: ''
    }
];

//initAgents(); pega o json e insere os dados no const agents

app.post('/userinfo', (req, res) => {
    let newAgentInfo = req.body;
    console.log(newAgentInfo);
    refreshAgentData(newAgentInfo);
    res.send('User updated!');
});

app.get('/userinfo', (req, res) => {
    res.json(agents);
});

const refreshAgentData = (data) => {
    agents = agents.map((curAgent) => {
        if(data.id == curAgent.id){
            curAgent = data;
        }
        return curAgent;
    });
};