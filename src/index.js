const fs = require('fs');
const ini = require('ini');
const Discord = require('discord.js');
const client = new Discord.Client();
const config = ini.parse(fs.readFileSync('./config.ini', 'utf-8'));
module.exports.config = config;
const servers = ini.parse(fs.readFileSync('./servers.ini', 'utf-8'));
const commands = Object.keys(servers).map(sv => servers[sv].command);

const serverinfo = require('./serverinfo.js');
const serverlist = require('./serverlist.js');

process.on('unhandledRejection', (reason, promise) => {
	console.log('Unhandled Rejection at:', promise, 'reason:', reason);
});

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
	client.user.setStatus(config.bot.status)
		.then(presence => console.log(`Status set to ${config.bot.status}`))
		.catch(console.error);
	client.user.setActivity(config.bot.activity_value, { type: config.bot.activity_type })
		.then(presence => console.log(`Activity set to ${config.bot.activity_type}: ${presence.game ? presence.game.name : 'none'}`))
		.catch(console.error);
});

client.on('message', async message => {
	if (message.author.bot || message.system) {
		return;
	}

	if (commands.includes(message.content)) {
		message.reply('**Fetching Server Info...**').then(msg => msg.delete(2000));
		const server = Object.keys(servers).find(sv => servers[sv].command === message.content);
		const embed = await serverinfo(message, servers[server].type, servers[server].ip, servers[server].port);
		message.channel.send(embed);
	}

	if (message.content === config.bot.svlist_command) {
		const embed = await serverlist(message, servers);
		message.channel.send(embed);
	}
});

client.login(process.env.TOKEN || config.bot.TOKEN);