const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const fs = require('fs');

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, (...args) => eventFunction.run(client, ...args));
  });
});
client.on("message", (message) => {
  if (message.channel.id == "543600973004800000") return;
  if (message.content.includes("discord.gg/")) {

    message.delete()
    message.reply("você não pode divulgar aqui, cuidado para não ser expulso!")
  }
})
client.on("guildMemberAdd", member => {
  let role = member.guild.roles.find(r => r.name === "[J]JOGADORES");
  member.addRole(role.id);
});
client.on("guildCreate", guild => {
  console.log(`O bot entrou nos servidor: ${guild.name} (id: ${guild.id}). População: ${guild.memberCount} membros!`);
  client.user.setActivity(`Estou em ${client.guilds.size} servidores`);
});

client.on("guildDelete", guild => {
  console.log(`O bot foi removido do servidor: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`Estou em ${client.guilds.size} servidores`);
});

client.on("guildMemberAdd", (member) => {
  let boasvindaspv = new Discord.RichEmbed()
    .setColor("ff0000")
    .setAuthor("Bem Vindo")
    .setTitle(`Obrigado por entrar no servidor\n**${member.guild.name}**`)
    .setDescription("Vá ao canal canal <#543396435236749312> para saber as regras.")
    .setFooter(`${member.guild.name}`)
  member.send(boasvindaspv)
});
client.on("guildMemberRemove", member => {
  let tchauembed = new Discord.RichEmbed()
    .setColor("ff0000")
    .setAuthor("Adeus")
    .setTitle(`Saida Do Servidor\n**${member.guild.name}**`)
    .setDescription("Todos ficaram triste por que você saiu, espero que volte algum dia.")
    .setFooter(`${member.guild.name}`)
  member.send(tchauembed)
})
client.on("ready", () => {
  console.log(`------- Logado como ${client.user.tag} -------- \n Estou em: ${client.guilds.size} servidores \n Estou vendo: ${client.users.size} pessoas \n ----------------------------------`);
  let random = [
    { name: 'k.nov para saber as novidades', type: 1, url: 'https://twitch.tv/chimpo006' },
    { name: 'k.denunciar para denunciar um membro oportuno', type: 1, url: 'https://twitch.tv/chimpo006' },
    { name: 'um joguinho que meu dono fez com todo o carinho :)', type: 0 }]

  function st() {
    let rs = random[Math.floor(Math.random() * random.length)];
    client.user.setPresence({ game: rs });
  }

  st();
  setInterval(() => st(), 5000);  //10000 = 10Ms = 10 segundos

});
client.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error(err);
  }

});

client.login(config.token)
