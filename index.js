// require discord.js
const Discord = require('discord.js');
// require key file
const { prefix, token } = require('./keys.json');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (message.content.startsWith(`${prefix}ping`)) {
	message.channel.send('Pong.');
}
});

// login to Discord with your app's token
client.login(token);
