const utils = require('./utils.js');
const Discord = require('discord.js');
const { config } = require('./index.js');

const serverlist = (message, servers) => {
	const embed = new Discord.RichEmbed()
	.setColor(config.bot.embed_svlist_color)
	.setTitle('__**\u0020SERVER LIST\u0020**__')
	.setDescription(`${Object.keys(servers).length} servers found\n\u200b`)
	.setFooter(`Requested by ${message.author.username}`, message.author.avatarURL)
	.setTimestamp();

	for (const server in servers) {
		const field = {};
		const servername = utils.escapeFormatting(server);
		const gamename = utils.gameName(servers[server].type);

		field.name = `**${servername}**`;
		field.value = `\`command\u2000\u2000:\`\u2000\u2000${servers[server].command}\n` +
		              `\`version\u2000\u2000:\`\u2000\u2000${gamename}`;
		field.inline = false;

		embed.fields.push(field);
	}

	return embed;
};

module.exports = serverlist;