var Scraper = require('images-scraper');

const google = new Scraper({
    puppeteer: {
        headless: true
    }
})

module.exports = {
    name:'image',
    description: 'sends an image to channel',
    async execute(client,message,args,Discord){
        const img_query = args.join(' ');
        if(!img_query) return message.channel.send('You didn\'t enter an image name');

        const image_results = await google.scrape(img_query, 1);
        message.channel.send(image_results[0].url);
    }
}