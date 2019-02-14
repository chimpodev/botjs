const discord = require('discord.js')

exports.run = (client,message,args)=>{
    var duvida = args.slice(0).join(" ")
     if(!duvida) return message.reply("escreva sua dúvida")
 var embed = new discord.RichEmbed()
 .setAuthor("Dúvida")
 .setColor("ff0000")
 .setDescription("")
 .setDescription(duvida)
 .setURL("https://discordapp.com/channels/406209503684722689/411602529680490496")
 .setTimestamp()
 .setImage(message.author.avatarURL)
 .setFooter(message.author.tag)
 .addBlankField();

 client.channels.get("543419193190776844").send(embed)
 message.channel.send("Dúvida enviada com sucesso!")
}
