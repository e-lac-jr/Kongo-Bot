const { MessageEmbed, MessageCollector } = require('discord.js');
const exampleEmbed = new MessageEmbed()
	.setTitle('Deathroll Game')
	.setDescription('Deathroll time!!!! If you roll a 0 you\'re out!')
	.setThumbnail('https://cdn.vox-cdn.com/thumbor/xpObSXlKm67r-l1PKp7bVtHSArM=/1400x1050/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/10423639/Screen_Shot_2017_08_29_at_4.27.44_PM.png')
	.addFields(
		{ name: 'Player list:', value: '-insert player list here-' },
		{ name: '\u200B', value: '\u200B' },
	)
	.setTimestamp();
const playerList = [];
const filter = (reaction) => reaction.emoji.name === '🤑';

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

async function gatherPlayers(message) {
	try {
		message.channel.send('Please react 🤑 to join the deathroll! \n https://www.gannett-cdn.com/authoring/2006/07/29/NSHT/ghows-LK-de1b4563-79ef-4cbf-8111-79e9784801a2-f8312043.jpeg?crop=799,451,x0,y15&width=799&height=451&format=pjpg&auto=webp')
			.then(m => m.react('🤑'))
			.then(m => m.createReactionCollector({ filter, time: 15_000 }))
			.then(c => c.on('collect', r => console.log(`Collected ${r.emoji.name}`)));
	}
	catch (error) {
		message.channel.send('Something failed while gathering players');
		console.log(error);
	}
}

module.exports = {
	name: 'deathroll',
	description: 'Starts a new deathroll game in the current channel',
	async execute(client, message, args, Discord) {
		/** *
         * Step 1: Message pops up for the start of the game
         * Step 2: Users react to the game to join the game
         * Step 3: Reaction starts the game
         * Step 4: Another embed pops up to scramble roll order and give a visual update of the game after every roll
         * ***/
		try {
			await gatherPlayers(message, client);
			message.channel.send({ embed: exampleEmbed });
		}
		catch (error) {
			message.channel.send('Something went wrong trying to execute deathroll');
			console.log(error);
		}
	},
};