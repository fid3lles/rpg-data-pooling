//HTML element references
var statusButtonsRef = document.querySelectorAll('.info-bar-button');
var inputBars = document.querySelectorAll('.info-bar-input');

//Agent data
var agent = {
    id: 'felipe-consolas',
    hp: '',
    san: '',
    ep: ''
};

//Refresh agent data
function refreshAgentData(key){
    switch(key){
        case 'hp':
            agent.hp = `${inputBars[0].value} / ${inputBars[1].value}`;
            break;
        case 'san':
            agent.san = `${inputBars[2].value} / ${inputBars[3].value}`;
            break;
        case 'ep':
            agent.ep = `${inputBars[4].value} / ${inputBars[5].value}`;
            break;
    }
}

//Event handlers
statusButtonsRef.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        if(i <= 3){
            refreshAgentData('hp');
        }else if(i <= 7){
            refreshAgentData('san');
        }else{
            refreshAgentData('ep');
        }
        sendDataToOBS();
    });
});

//Sending data to server
function sendDataToOBS(){    
    fetch('http://localhost:3000/userinfo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(agent)
    })
    .then(response => response.json())
    .catch(error => console.error(error));
}