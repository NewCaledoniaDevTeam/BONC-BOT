const Discord = require('discord.js')
const db = require('quick.db')
let prefix = process.env.PREFIX;

module.exports.run = async(bot, message, args) => {
    if (!message.content.toLowerCase().startsWith(prefix)) return;

    let embed = new Discord.RichEmbed()
        .setTitle("Help [Prefix m!]")
        .addField("Economy Commands", "`pay` \n `balance`")
        .addField("Census Commands", "`census` \n `census people`")
        .addField("Admin Commands", "`addmoney` \n `removemoney`")
        .setColor("#2980b9")
    message.channel.send(embed)

}

module.exports.help = {
    name: "help",
    aliases: [""]
}