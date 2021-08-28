//
//
//
const Command = require("../Structures/Command.js");
const fetch = require('node-fetch');

module.exports = new Command({
	name: "pvu",
	description: "Plant vs Undead",
	async run(message, args, client) {
		if (!args[1]) return message.channel.send("Invalid command. Type `!pvu<space><amount>` for more info.");
		if (isNaN(parseInt(args[1]))) return message.channel.send("Invalid amount. Type `!pvu<space><amount>` for more info.");
		if (args[2]) return message.channel.send("Invalid command. Type `!pvu<space><amount>` for more info.");

		fetch('https://api.coingecko.com/api/v3/simple/price?ids=plant-vs-undead-token&vs_currencies=php')
			.then(res => res.json())
			.then(body => {
				let x = body['plant-vs-undead-token'].php.toFixed(2) * args[1];
				message.reply(`\`PvU\` **${args[1]}** => \`PHP\` **${x}**`);
			});
	}
});
