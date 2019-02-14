const Discord = require ('discord.js');

exports.run = (client, message, args) => {

    var usuario = message.mentions.users.first();
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!tomute) return message.reply("você não mencionou ninguem.");
    if(!message.guild.member(message.author.id).hasPermission("ADMINISTRATOR")) return message.reply("você não tem permissão para usar esse comando")
    let muterole = message.guild.roles.find(`name`, "Muted");
    let embedunmute = new Discord.RichEmbed()
    .setColor("ff0000")
    .setTitle("UnMute")
    .addField("Usuario:", `<${tomute.name}>`)
    .addField("Por:", message.author.tag)
    client.channels.get("543396525728989194").send(embedunmute)
    message.guild.member(usuario).send(`Você foi desmutado`)
    tomute.removeRole(muterole.id);
}