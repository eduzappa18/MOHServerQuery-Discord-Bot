const Discord = require('discord.js');
const Gamedig = require('gamedig');
const utils = require('./utils.js');
const { config } = require('./index.js');

const serverinfo = async (message, type, ip, port) => {
	try {
		const data = await Gamedig.query({
			type: type,
			host: ip,
			port: port
		});
		const gamename              = utils.gameName(type);
		const gametype              = utils.escapeFormatting(data.raw.gametype);
		const servername            = utils.escapeFormatting(data.name);
		const [names, frags, pings] = utils.playersData(data.players);

		const embed = new Discord.RichEmbed()
		.setColor(config.bot.embed_svinfo_color)
		.setTitle(`**${servername}**`)
		.setDescription(`More stats at [www.gametracker.com](https://www.gametracker.com/server_info/${ip}:${port}/)`)
		.attachFiles([`./src/assets/img/${type}.png`])
		.setAuthor(gamename, `attachment://${type}.png`)

		.addField('Server IP', `\`${ip}:${port}\``, true)
		.addField('Players', `${data.players.length}/${data.maxplayers}`, true)
		.addField('Map', data.map.toLowerCase(), true)
		.addField('Gametype', `${gametype}`, false)

		.addField('Player',       `\`\`\`fix\n${names.join('\n')}\`\`\``, true)
		.addField('Kills/Deaths', `\`\`\`fix\n${frags.join('\n')}\`\`\``, true)
		.addField('Ping',         `\`\`\`fix\n${pings.join('\n')}\`\`\``, true)

		/* Maybe one day this will be a thing... Join a server using mohreborn url protocol*/
		/*.addField('Join with MohReborn Launcher', `<mohreborn://${type}/${ip}:${port}>`, false)*/

		.setFooter(`Requested by ${message.author.username}`, message.author.avatarURL)
		.setTimestamp();

		return embed;
	}
	catch(e) {
		const embed = new Discord.RichEmbed()
		.setColor(config.bot.embed_error_color)
		.addField('Connection failed','The server is not responding')
		.setFooter(`Requested by ${message.author.username}`, message.author.avatarURL)
		.setTimestamp();
		return embed;
	}
};

module.exports = serverinfo;