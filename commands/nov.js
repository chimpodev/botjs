const Discord = require('discord.js');
const client = new Discord.Client();
module.exports.run = (client, message, args) => {

        let embed = new Discord.RichEmbed()
        .setColor("#ff0000")
        .setThumbnail(message.guild.iconURL)
        .setTimestamp()
        .setTitle("📑Novidades")
        .addField("Prefixo de nosso BOT:", "k.")
        .addField("Comandos", "denunciar, embed, denunciar, duvida, inv, kamehameha, sugerir, rolepedir, serverinfo e uinf")
        .addField("Comandos administrativos", "anunciar, ban, limpar, kick, addrole, removerole, unmute, tempmute(1s, 1m, 1h, 1d), say e warn")
        .addField("Atualizacões", `Novo comando: unmute permissão de administrador`)
        .addField("Data da ultima atualização", "08/02/19 Sexta-feira")
        .setFooter(`Comando requisitado por: ${message.author.tag}`, message.author.displayAvatarURL);
        message.channel.send(embed)
}

module.exports.help = {
    name: "nov"
}