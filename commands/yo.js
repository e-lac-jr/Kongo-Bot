module.exports = {
    name: 'yo',
    description: "Ping command that returns suuuh dude",
    async execute(client,message,args,Discord){
        message.channel.send('suuuuh dude');
    }
}