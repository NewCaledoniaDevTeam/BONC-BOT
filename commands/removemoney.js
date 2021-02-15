const Discord = require("discord.js");
const db = require("quick.db");
let prefix = process.env.PREFIX;

module.exports.run = async(bot, message, args) => {
    if (!message.content.toLowerCase().startsWith(prefix)) return;
    let ownerID = '355113338969128970'
    if (message.author.id !== ownerID) return;

    let user = message.mentions.members.first() || message.author;

    if (isNaN(args[1])) return;
    db.subtract(`money_${message.guild.id}_${user.id}`, args[1])
    let bal = await db.fetch(`money_${message.guild.id}_${user.id}`)

    let moneyEmbed = new Discord.RichEmbed()
        .setColor("#e74c3c")
        .setDescription(`:outbox_tray: Removed ${args[1]} credits\n\nNew Balance: ${bal} checks`);
    message.channel.send(moneyEmbed)

};


module.exports.help = {
    name: "remove",
    aliases: ["rm"]
}