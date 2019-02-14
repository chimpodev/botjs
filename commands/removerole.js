const Discord = require('discord.js');
const client = new Discord.Client();
module.exports.run = (client, message, args) => {

if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.reply("você não tem permissão para usar este comando!")
    let usuario = message.mentions.members.first() || message.guild.members.get(args[0])
    let cargo_nome = message.mentions.roles.first().name || args[1]
    if(!usuario) return;
    if(!cargo_nome) return;
    let cargo = message.guild.roles.find(role => role.name === `${cargo_nome}`)
    

    usuario.removeRole(cargo.id).then(() => {message.channel.send(`${usuario} teve o cargo: <@&${cargo.id}> removido!`)})
	let embRoleChannel = new Discord.RichEmbed()
.setColor("ff0000")
.setTitle("Role Retirada")
.setDescription(`Role **${cargo.id}** removida do usuário ${member.user}`)
.setTimestamp()
.setThumbnail(message.author.displayAvatarURL)
.setFooter(`Comando requisitado por: ${message.author.tag}`, message.author.displayAvatarURL);
    client.channels.get("543396525728989194").send(embRoleChannel)

    message.delete();
};

module.exports.help = {
    name: "removerole"
}