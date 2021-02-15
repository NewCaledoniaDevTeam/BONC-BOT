const Discord = require("discord.js");
const db = require("quick.db");
let prefix = process.env.PREFIX;

module.exports.run = async(bot, message, args) => {
    if (!message.content.toLowerCase().startsWith(prefix)) return;

    let money = db.startsWith(`money_${message.guild.id}`, { sort: '.data' })
    let content = "";

    var newTotal = 0;
    for (let i = 0; i < money.length; i++) {
        var total = money[i].data;
        newTotal += total;

        content = `${newTotal}\n`
    }

    let embed = new Discord.RichEmbed()
        .setDescription(`**${message.guild.name}'s Census**\n\n${content}`)
        .setColor("#2980b9")

    if (!args[0]) return message.channel.send(embed)

    if (args[0] == 'people') {
        let money = db.startsWith(`money_${message.guild.id}`, { sort: '.data' })
        let content = "";

        for (let i = 0; i < money.length; i++) {
            let userID = money[i].ID.split('_')[2]
            let user = "<@" + userID + ">"

            content += `${i+1}. ${user} - ${money[i].data}\n`

        }

        let embedPeople = new Discord.RichEmbed()
            .setDescription(`**${message.guild.name}'s Census**\n\n${content}`)
            .setColor("#2980b9")

        message.channel.send(embedPeople)
    }
};

module.exports.help = {
    name: "census",
    aliases: [""]
}