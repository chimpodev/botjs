exports.run = (client,message,args)=>{
    var razão = args.slice(1).join(" ")

    var usuario = message.mentions.users.first();
    if(!message.guild.member(message.author.id).hasPermission("KICK_MEMBERS")) return message.reply("você não tem permissão para usar esse comando")
    if(message.mentions.users.size < 1) return message.reply("você não mencinou ninguém")
    if(!message.guild.member(usuario).kickable) return message.reply("eu não posso kickar essa pessoa")
    if(razão.length < 1) return message.reply("você não colocou uma razão")

    message.guild.member(usuario).kick()

   var discord = require ('discord.js')

   var embed = new discord.RichEmbed()
   .setTitle("Usuario kickado do servidor")
   .addField("Usuario:",usuario.username)
   .addField("Razão:", razão)
   .addField("Por:", message.author.tag);
   client.channels.get("543396525728989194").send(embed)


   message.channel.send("Kickado")
}
