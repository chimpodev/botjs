const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

  if(!message.delete) return message.reply("Não consigo apagar");
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("você não tem permissão!");
  if(!args[0]) return message.channel.send("Você não especificou a quantidade de mensagens");
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`${args[0]} mensagens deletadas!🙂`).then(msg => msg.delete(5000)); //5000 = 5 segundos 50000 = 50 segundos
});

}

module.exports.help = {
  name: "limpar"
}
