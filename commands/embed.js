var discord = require('discord.js')

exports.run = (client,message,args)=>{
 var embed = new discord.RichEmbed()
 .setAuthor(message.author.username)
 .setColor("#6A5ACD")
 .setDescription("")
 .setTitle("")
 .setURL("https://discordapp.com/channels/406209503684722689/411602529680490496")
 .setTimestamp()
 .setImage(client.user.avatarURL)
 .setFooter("")
 .setThumbnail(message.author.avatarURL)
 .addBlankField();

 message.channel.send(embed)
}