//
//
//
const Command = require("../Structures/Command.js");
const fetch = require('node-fetch');

module.exports = new Command({
	name: "skill",
	description: "Cryptoblades SKILL",
	async run(message, args, client) {
		if (!args[1]) return message.channel.send("Invalid command. Type `!skill<space><amount>` for more info.");
		if (isNaN(parseInt(args[1]))) return message.channel.send("Invalid amount. Type `!skill<space><amount>` for more info.");
		if (args[2]) return message.channel.send("Invalid command. Type `!skill<space><amount>` for more info.");

		fetch('https://api.coingecko.com/api/v3/simple/price?ids=cryptoblades&vs_currencies=php')
			.then(res => res.json())
			.then(body => {
				let x = body.cryptoblades.php.toFixed(2) * args[1];
				message.reply(`\`SKILL\` **${args[1]}** => \`PHP\` **${x}**`);
			});
	}
});
