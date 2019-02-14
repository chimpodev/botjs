const discord = require('discord.js')
exports.run = (client, message, args) => {
    const say = args.join(" ")
    const role = message.mentions.roles.first()
    const member = message.author.tag
    if(!role) return message.reply("você não mencionou nenhuma role");
        let em = new discord.RichEmbed()
        .setTitle("**Pedido de Cargo**")
        .setColor("ff0000")
        .setDescription(say)
        .setTimestamp()
        .setThumbnail(message.author.displayAvatarURL)
        .setFooter(`${message.author.tag}`, message.author.displayAvatarURL)

        message.channel.send('Pedido enviado')
        client.channels.get('543417208487936010').send(em).then(async (msg) => {
            await msg.react('✅');
            await msg.react('❎')  
              
            client.on('messageReactionAdd', (reaction, user) => {
                if (reaction.emoji.name === '✅' && user.id !== client.user.id && user.id === message.author.id) { 
                    let embedaccdvvd = new discord.RichEmbed()
                    .setAuthor(`Deseja atribuir o cargo ${say} ao membro ${message.author.tag}?`)
                    .addField("Se sim basta reagir ao emoji ✅\n", "Se não reaja ao emoji ❎")
                    client.channels.get("543417208487936010").send(embedaccdvvd).then(async (msg) => {
                        await msg.react('✅');
                        await msg.react('❎') 
                        client.on('messageReactionAdd', (reaction, user) => {
                            if (reaction.emoji.name === '✅' && user.id !== client.user.id && user.id === message.author.id) {
                                message.guild.member(member).addRole(say.id)
                            }
                    })
                    client.on('messageReactionAdd', (reaction, user) => {
                        if (reaction.emoji.name === '❎' && user.id !== client.user.id && user.id === message.author.id) {
                            message.author.send(`Seu pedido de cargo ${say} foi negado`)
                        }
                })})
                
                }})

              client.on('messageReactionAdd', (reaction, user) => {
                if (reaction.emoji.name === '❎' && user.id !== client.user.id && user.id === message.author.id) { 
                    client.channels.get("543417208487936010").send("Pedido de cargo recusado")
                             setTimeout(() => {
            msg.delete()
          }, 120000);
                
                }})})
            }
