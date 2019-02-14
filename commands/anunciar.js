const Discord = require("discord.js");
exports.run = (client,message,args)=>{
    var anuncio = args.slice(0).join(" ")

    if(!message.guild.member(message.author.id).hasPermission("KICK_MEMBERS")) return message.reply("você não tem permissão para usar esse comando")
    if(!anuncio) return message.reply("escreva seu anuncio")
    let embed = new Discord.RichEmbed()
    .setColor("ff0000")
    .setTitle("**Anuncio** :mega:")
    .setDescription(anuncio)
    .setFooter(message.author.tag)
    client.channels.get('543396525728989194').send(embed)
    message.channel.send("Anunciado com sucesso!")
    module.exports.help = {
        name: "anunciar"
    }
}