exports.run = (client,message,args)=>{
    var razão = args.slice(1).join(" ")

    var usuario = message.mentions.users.first();
    if(message.mentions.users.size < 1) return message.reply("você não mencinou ninguém")
    if(razão.length < 1) return message.reply("você não colocou uma razão")
    


   var discord = require ('discord.js')

   var embed = new discord.RichEmbed()


   .setColor("ff0000")
   .setAuthor("Denúncia")   
   .setTitle(usuario.username)
   .addField("Razão:", razão)
   .addField("Por:", message.author.tag)
   .setURL("https://discordapp.com/channels/406209503684722689/411602529680490496")
   .setTimestamp()
   .setImage()
   .setFooter(message.author.tag)
   .setThumbnail(message.author.avatarURL)
   .addBlankField();
   client.channels.get("543396525728989194").send(embed)
   client.channels.get("543419249599840260").send(embed)

   message.channel.send("Denunciado")
}