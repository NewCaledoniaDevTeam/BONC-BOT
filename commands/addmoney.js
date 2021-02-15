const Discord = require("discord.js");
const db = require("quick.db");
let prefix = process.env.PREFIX;


exports.run = async(bot, message, args) => {
    if (!message.content.toLowerCase().startsWith(prefix)) return;
    let ownerID = '355113338969128970'
    if (message.author.id !== ownerID) return;

    let user = message.mentions.members.first() || message.author;

    if (isNaN(args[1])) return;
    db.add(`money_${message.guild.id}_${user.id}`, args[1])
    let bal = await db.fetch(`money_${message.guild.id}_${user.id}`)

    let moneyEmbed = new Discord.RichEmbed()
        .setColor("#2ecc71")
        .setDescription(`:inbox_tray: Added ${args[1]} credits\n\nNew Balance: ${bal} checks`);
    message.channel.send(moneyEmbed)

};

module.exports.help = {
    name: "add",
    aliases: ["am"]
}