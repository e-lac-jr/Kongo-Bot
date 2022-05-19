function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

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
		try {
			message.channel.send('');
		}
		catch (error) {
			message.channel.send('Error, ' + error);
		}
	},
};