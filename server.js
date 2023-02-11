require('dotenv').config();

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

app.use('/', express.static(path.join(__dirname + '/public')));

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