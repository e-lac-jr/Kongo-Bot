function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

module.exports = {
    name: 'deathroll',
    description: "Starts a new deathroll game in the current channel",
    async execute(client,message,args,Discord){
        counter = 10000;
        message.channel.send('Game has started!');
        client.on('message', msg => {
            if(msg.content === 'roll'){
                message.channel.send(`${message.author} has rolled down to ` + (counter -= (getRandomInt(counter) + 1)) + '!');
            }
            if(counter <= 0) {
                message.channel.send(`Game Over ${message.author} has died :\(`);
                return;
            }
        })
    }
}