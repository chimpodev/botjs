exports.run = (client,message,args)=>{
    var razão = args.slice(1).join(" ")

    var usuario = message.mentions.users.first();
    if(!message.guild.member(message.author.id).hasPermission("KICK_MEMBERS")) return message.reply("você não tem permissão para usar esse comando")
    if(message.mentions.users.size < 1) return message.reply("você não mencinou ninguém")
    if(!message.guild.member(usuario).kickable) return message.reply("eu não posso avisar essa pessoa")
    if(razão.length < 1) return message.reply("você não colocou uma razão")


   var Discord = require ('discord.js')

   var embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setTitle("Warn")
   .addField("Usuario:", usuario.username)
   .addField("Razão:", razão)
   .addField("Por:", message.author.tag);
   client.channels.get("543396525728989194").send(embed)


   message.channel.send("Avisado")
}