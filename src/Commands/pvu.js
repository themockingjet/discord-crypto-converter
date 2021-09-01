//
//
//
const Command = require("../Structures/Command.js");
const fetch = require('node-fetch');

module.exports = new Command({
	name: "pvu",
	description: "Plant vs Undead",
	async run(message, args, client) {
		if (isNaN(parseInt(args[1]))) {
			return message.channel.send("Invalid amount. Type `!pvu <amount>` or `!pvu <amount> @ <price>`.")

		} else if (args[2] === "@" && !args[3]) {
			return message.channel.send("Invalid command. Type `!pvu <amount> <@> <price>`.")

		} else if (args[2] === "@" && !isNaN(parseInt(args[3]))){
			
			let y = parseFloat(args[3]).toFixed(2);
			let x = (y * args[1]).toFixed(2);

			message.reply(`\`PVU\` **${args[1]}** => \`PHP\` **${x}**`);
			
		} else if (!isNaN(parseInt(args[1])) && !args[2]) {
			
			fetch('https://api.coingecko.com/api/v3/simple/price?ids=plant-vs-undead-token&vs_currencies=php')
			.then(res => res.json())
			.then(body => {
				let x = body['axie-infinity'].php.toFixed(2) * args[1];
				message.reply(`\`PVU\` **${args[1]}** => \`PHP\` **${x}**`);
			});
		} else {
			return message.channel.send("Invalid command. Type `!pvu <amount>` or `!pvu <amount> @ <price>`.")
		};
	}
});
