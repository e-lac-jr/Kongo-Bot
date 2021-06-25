function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

module.exports = {
    name: 'deathroll',
    description: "Starts a new deathroll game in the current channel",
    async execute(client,message,args,Discord){
        counter = 10000;
        stop = false;
        message.channel.send('Game has started!');
        client.on('message', msg => {
            if(counter == 0) {
                stop = true;
                message.channel.send('Game Over');
            }
            if(msg.content === 'roll' && stop === false){
                message.channel.send(`${message.author} has rolled down to ` + (counter -= (getRandomInt(counter) + 1)) + '!');
            }
        })
    }
}