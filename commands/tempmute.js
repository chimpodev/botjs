const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (client, message, args) => {

  var usuario = message.mentions.users.first();
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("você não mencionou ninguem.");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("não posso mutar ele!");

  let muterole = message.guild.roles.find(`name`, "Muted");
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  let mutetime = args[1];
  if(!mutetime) return message.reply("você não especificou o tempo de mute!");
  var razão = args.slice(1).join(" ")

  await(tomute.addRole(muterole.id));
  if(!message.guild.member(message.author.id).hasPermission("ADMINISTRATOR")) return message.reply("você não tem permissão para usar esse comando")
  if(message.mentions.users.size < 1) return message.reply("você não mencinou ninguém")
  if(razão.length < 1) return message.reply("você não colocou uma razão")
  message.guild.member(usuario).send(`Você foi mutado temporariamente por: ${ms(ms(mutetime))}`)
let embedMute = new Discord.RichEmbed()
    .setColor("ff0000")
    .setTitle("TempMute")
    .addField("Usuario:", `<${tomute.name}>`)
    .addField("Razão:", razão)
    .addField("Por:", message.author.tag)
    .addField("Tempo:", `${ms(ms(mutetime))}`)
    client.channels.get("543396525728989194").send(embedMute)
    setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> foi mutado`)
  }, ms(mutetime));

}

module.exports.help = {
  name: "tempmute"
}
