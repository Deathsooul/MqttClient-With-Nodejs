const mqtt = require('mqtt');

const client = mqtt.connect('mqtt://192.168.100.33');

// Mesmo topico que tu ta enviadando na tua ESP
client.subscribe('<topico aqui>');

client.on('message', function (topic, message) {
    // message is Buffer - por isso precisa do toString()
    console.log(message.toString());

    // ... Aai aqui pra baixo tu pode mandar salvar essa mensaggem que tu recebeu no banco de dados
});
