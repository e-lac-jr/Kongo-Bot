module.exports = {
    name: 'kiss',
    description: "Returns a cute monkey kiss",
    async execute(client,message,args,Discord){
        message.channel.send('https://media1.tenor.com/images/89f8698fb450da25bd0c3b2d53e7fc9d/tenor.gif?itemid=9316431');
    }
}