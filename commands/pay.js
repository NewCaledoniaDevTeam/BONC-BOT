const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");
let prefix = process.env.PREFIX;

module.exports.run = async(bot, message, args) => {
    if (!message.content.toLowerCase().startsWith(prefix)) return;

    let user = message.mentions.members.first()

    let member = db.fetch(`money_${message.guild.id}_${message.author.id}`)

    let embed1 = new Discord.RichEmbed()
        .setColor("#e74c3c")
        .setDescription(`:no_entry_sign: Mention someone to pay them`);

    if (!user) {
        return message.channel.send(embed1)
    }

    let embedbot = new Discord.RichEmbed()
        .setColor("#e74c3c")
        .setDescription(`:no_entry_sign: Can't pay the bot (but thank you for trying)`);

    if (user.user.username == "MTB") {
        return message.channel.send(embedbot)
    }

    let embed2 = new Discord.RichEmbed()
        .setColor("#e74c3c")
        .setDescription(`:no_entry_sign: Specify an amount to pay`);

    if (!args[1]) {
        return message.channel.send(embed2)
    }
    let embed3 = new Discord.RichEmbed()
        .setColor("#e74c3c")
        .setDescription(`:no_entry_sign: You can't pay someone negative money`);

    if (message.content.includes('-')) {
        return message.channel.send(embed3)
    }
    let embed4 = new Discord.RichEmbed()
        .setColor("#e74c3c")
        .setDescription(`:no_entry_sign: You don't have that much money`);

    if (member < args[1]) {
        return message.channel.send(embed4)
    }

    let embed5 = new Discord.RichEmbed()
        .setColor("#2ecc71")
        .setDescription(`:white_check_mark: You have payed ${user.user.username} ${args[1]} checks`);

    message.channel.send(embed5)
    db.add(`money_${message.guild.id}_${user.id}`, args[1])
    db.subtract(`money_${message.guild.id}_${message.author.id}`, args[1])

}

module.exports.help = {
    name: "pay",
    aliases: [""]
}