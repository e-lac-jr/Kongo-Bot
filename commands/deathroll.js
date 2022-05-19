const { MessageEmbed } = require('discord.js');
const exampleEmbed = new MessageEmbed()
	.setTitle('Deathroll Game')
	.setDescription('Deathroll time!!!! If you roll a 0 you\'re out!')
	.setThumbnail('https://cdn.vox-cdn.com/thumbor/xpObSXlKm67r-l1PKp7bVtHSArM=/1400x1050/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/10423639/Screen_Shot_2017_08_29_at_4.27.44_PM.png')
	.addFields(
		{ name: 'Player list:', value: '-insert player list here-' },
		{ name: '\u200B', value: '\u200B' },
	)
	.setTimestamp();

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

// async function gatherPlayers() {
// }

module.exports = {
	name: 'deathroll',
	description: 'Starts a new deathroll game in the current channel',
	async execute(client, message, args, Discord) {
		/** *
         * Step 1: Embed pops up
         * Step 2: Users react to the game to join the game
         * Step 3: Reaction starts the game
         * Step 4: Another embed pops up to scramble roll order and give a visual update of the game after every roll
         * ***/
		// await gatherPlayers();
		message.channel.send({ embed: exampleEmbed });
	},
};