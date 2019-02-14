exports.run = (client,message,args)=>{
    var anuncio = args.slice(0).join(" ")
    if(!message.guild.member(message.author.id).hasPermission("KICK_MEMBERS")) return message.reply("você não tem permissão para usar esse comando")
    if(!anuncio) return message.reply("escreva sua mensagem")
const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{});  
    message.channel.send(sayMessage);
  };
