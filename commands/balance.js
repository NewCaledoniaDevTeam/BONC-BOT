const Discord = require("discord.js");
const db = require("quick.db");
let prefix = process.env.PREFIX;

module.exports.run = async(bot, message, args, utils) => {
    if (!message.content.toLowerCase().startsWith(prefix)) return;

    let user = message.mentions.members.first() || message.author;

    let bal = db.fetch(`money_${message.guild.id}_${user.id}`)

    if (bal === null) bal = 0;

    let moneyEmbed = new Discord.RichEmbed()
        .setColor("#2980b9")
        .setDescription(`**${user} Balance**\n\nAccount: ${bal} checks`);
    message.channel.send(moneyEmbed)
};

module.exports.help = {
    name: "balance",
    aliases: ["bal"]
}