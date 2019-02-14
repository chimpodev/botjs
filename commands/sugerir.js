const Discord = require("discord.js")
exports.run = (client, message, args) => {

    const say = args.join(" ")

    if(say.length < 5) return message.channel.send(` ${message.author}, Você deve colocar 5 ou mais caracteres para votação :P \n Em caso de votação zoeira ira receber uma penalidade :D `)

    let em = new Discord.RichEmbed()
    .setTitle("**Sugestão**")
    .setColor("ff0000")
    .setDescription(say)
    .setTimestamp()
    .setThumbnail(message.author.displayAvatarURL)
    .setFooter(`${message.author.tag}`, message.author.displayAvatarURL)

    message.channel.send('Sugestão enviada')
    client.channels.get('543398688613990401').send(em).then(async msg => {
    await msg.react("✅")
    await msg.react("❎")
 })
}