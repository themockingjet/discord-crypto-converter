//
//
//
const Command = require("../Structures/Command.js");

module.exports = new Command({
	name: "help",
	description: "Hello!",

	async run(message, args, client) {
		if (!args[1]) return message.channel.send("Invalid command. Type `!help crypto` for more info.")
		if (!args[2] && args[1] != "crypto") return message.channel.send("Invalid command. Type `!help crypto` for more info.")

		message.channel.send("```Crypto Converter - converts amount of slp to its current value.\n\n"
							+"Command - Amount\nE.g.\n!slp<space><amount>\n!axs<space><amount>\n!weth<space><amount>\n!pvu<space><amount>\n!skill<space><amount>\n\nExtra: Breed Cost\n"
							+"!bc 1     #number of breed```")
	}
});
