const Discord = require('discord.js');
const client = new Discord.Client();
module.exports.run = (client, message, args)  => {

    const moment = require("moment")
    moment.locale("pt-BR")
    let usuario = message.mentions.users.first();
    let online = message.guild.members.filter(a => a.presence.status == "online").size;
    let ocupado = message.guild.members.filter(a => a.presence.status == "dnd").size;
    let ausente = message.guild.members.filter(a => a.presence.status == "idle").size;
    let offline = message.guild.members.filter(a => a.presence.status == "offline").size;
    let bot = message.guild.members.filter(a => a.user.bot).size;
    let totalmembros = message.guild.memberCount;
    let canaistexto = message.guild.channels.filter(a => a.type === "text").size;
    let canaisvoz = message.guild.channels.filter(a => a.type === "voice").size;
    let cargos = message.member.roles.map(r => `${r}`).join(', ')
        const embed = new Discord.RichEmbed()
        .setTitle(`Informações do membro`)
        .addField(`Nome:`, `**${message.author}**`)
        .addField("Apelido:", `${message.nickname ? `${message.nickname}` : "**Nenhum**"} `)
        .setColor("#ff0000")
        .setThumbnail(message.author.avatarURL)
        .setTimestamp()
        .addField('▫Criada em:', moment(message.author.createdAt).format('LLLL'))
        .addField("▫ID:", `${message.author.id}`)
        .addField("▫Jogando:", `${message.author.presence.name? `**${message.author.presence.name}**` : "**Nada**"}`)
        .addField("▫Cargos:", cargos)
        .setFooter(`Comando solicitado por: ${message.author.tag}`, `${message.author.avatarURL}`)
        message.channel.send(embed)
}

module.exports.help = {
    name: "uinf"
}