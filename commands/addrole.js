const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  
  if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send("sem permissão")
  let membro = message.mentions.members.first() || message.guild.members.get(args[0])
  let cargo_nome = message.mentions.roles.first().name || args[1]
  if(!membro) return;
  if(!cargo_nome) return;
  let cargo = message.guild.roles.find(role => role.name === `${cargo_nome}`)
  
  if(membro.roles.has(cargo.id)) return message.reply("esse membro ja possui esse cargo")
  membro.addRole(cargo.id).then(() => {message.reply(`o cargo: ${cargo.name} foi adicionado ao membro: ${membro.user.tag}`)})
	let em = new Discord.RichEmbed()
.setColor("ff0000")
.setTitle("**AddRole**")
.setDescription(`OK! Eu adicionei a role ${cargo.id} ao usuário ${member.user}.`)
.setTimestamp()
.setThumbnail(message.author.displayAvatarURL)
.setFooter(`Comando requisitado por: ${message.author.tag}`, message.author.displayAvatarURL)
message.channel.send({embed: em})
	let embRoleChannel = new discord.RichEmbed()
.setColor("ff0000")
.setTitle("Role Adicionada")
.setDescription(`Role **${cargo.id}** setada no usuário ${member.user}`)
.setTimestamp()
.setThumbnail(message.author.displayAvatarURL)
.setFooter(`Comando requisitado por: ${message.author.tag}`, message.author.displayAvatarURL);
	client.channels.get("543396525728989194").send(embRoleChannel)
  }

