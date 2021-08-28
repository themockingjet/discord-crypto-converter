//
//
//
const Command = require("../Structures/Command.js");
const fetch = require('node-fetch');

module.exports = new Command({
	name: "weth",
	description: "WETH",
	async run(message, args, client) {
		if (!args[1]) return message.channel.send("Invalid command. Type `!weth<space><amount>` for more info.");
		if (isNaN(parseInt(args[1]))) return message.channel.send("Invalid amount. Type `!weth<space><amount>` for more info.");
		if (args[2]) return message.channel.send("Invalid command. Type `!weth<space><amount>` for more info.");

		fetch('https://api.coingecko.com/api/v3/simple/price?ids=weth&vs_currencies=php')
			.then(res => res.json())
			.then(body => {
				let x = body.weth.php.toFixed(2) * args[1];
				message.reply(`\`WETH\` **${args[1]}** => \`PHP\` **${x}**`);
			});
	}
});
