const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!';
const fs = require('fs');
client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
	require(`./handlers/${handler}`)(client, Discord);
});

client.login('ODQxNTMzOTI0MzM2ODYxMTk0.YJoJig.O_ZdGl9NaFHosdNRsNpz087Qn5M');