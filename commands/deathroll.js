const { MessageEmbed, MessageCollector, SystemChannelFlags } = require('discord.js');
const exampleEmbed = new MessageEmbed()
	.setTitle('Deathroll Game')
	.setDescription('Deathroll time!!!! If you roll a 0 you\'re out!')
	.setTimestamp();
const gatherPlayerEmbed = new MessageEmbed()
	.setTitle('Please react 🤑 to join the deathroll! You have 10 seconds to join!!')
	.setImage('https://www.gannett-cdn.com/authoring/2006/07/29/NSHT/ghows-LK-de1b4563-79ef-4cbf-8111-79e9784801a2-f8312043.jpeg?crop=799,451,x0,y15&width=799&height=451&format=pjpg&auto=webp');
const playerList = [];

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}

async function gatherPlayers(message) {
	try {
		message.channel.send({ embeds : [gatherPlayerEmbed] }) // 'Please react 🤑 to join the deathroll! You have 10 seconds to join!! \n https://www.gannett-cdn.com/authoring/2006/07/29/NSHT/ghows-LK-de1b4563-79ef-4cbf-8111-79e9784801a2-f8312043.jpeg?crop=799,451,x0,y15&width=799&height=451&format=pjpg&auto=webp')
			.then(m => {
				// Gathering players
				m.react('🤑');
				const filter = (reaction, user) => reaction.emoji.name === '🤑' && !user.bot;
				const collector = m.createReactionCollector({ filter, time: 10000 });
				collector.on('collect', (reaction, user) => {
					m.channel.send(`${user.tag} has joined the deathroll!`);
					playerList.push(user.tag);
					// console.log(playerList);
				});
				collector.on('end', () => {
					m.channel.send('Collection finished!');
					// console.log(playerList.join('\r\n'));
					exampleEmbed.addField('Player list:', playerList.join('\r\n'));
					m.channel.send({ embeds: [exampleEmbed] });
				});
			});
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
         * Step 3: Another embed pops up to scramble roll order and give a visual update of the game after every roll
         * ***/
		try {
			gatherPlayers(message);
		}
		catch (error) {
			message.channel.send('Something went wrong trying to execute deathroll');
			console.log(error);
		}
	},
};