const gameName = type => {
	const gamename = 'Medal of Honor';

	if (type === 'mohaa') {
		return `${gamename}: Allied Assault`;
	} else if (type === 'mohsh') {
		return `${gamename}: Allied Assault Spearhead`;
	} else if (type === 'mohbt') {
		return `${gamename}: Allied Assault Breakthrough`;
	}

	return gamename;
};

// Clean Discord text formatting (Bold, Italic, Underline, etc...)
const escapeFormatting = name => {
	name = name.replace(/`/g, '\\`');  // code block
	name = name.replace(/\|/g, '\\|'); // spoiler
	name = name.replace(/\*/g, '\\*'); // bold/italic
	name = name.replace(/_/g, '\\_');  // underline
	name = name.replace(/~/g, '\\~');  // strikethrough
	name = name.replace(/https?:\/\//g, ''); // urls

	return name;
};

const playersData = data => {
	const [names, frags, pings] = [[], [], []];

	if (data.length > 0) {
		data.forEach(function(player) {
			names.push(fixPlayerName(player.player));
			frags.push(`${player.frags}/${player.deaths}`);
			pings.push(`${player.ping}ms`);
		})
	} else {
		names.push('N/A');
		frags.push('N/A');
		pings.push('N/A');
	}

	return [names, frags, pings];
};

const fixPlayerName = name => {
	name = name.replace(/=/g, '≡'); // needed to not break the color in the 'players' code block
	if (name.length > 15) {
		return name.substring(0, 15);
		//return `${name.substring(0, 14)}…`;
	}
	return name;
};

module.exports = {
	gameName,
	escapeFormatting,
	playersData
};