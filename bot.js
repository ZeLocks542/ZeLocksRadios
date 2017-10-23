const Discord = require('discord.js'),
client = new Discord.Client();

client.on('ready' , () => {
	var memberCount = client.users.size;
var servercount = client.guilds.size;
    var servers = client.guilds.array().map(g => g.name).join(',');
	console.log('-----------------------------------Musique--------------------------------'.error)
	console.log("[!]Bot: Musique".error + "\n[!]Le préfix actuelle: ".warn + "z!" + "\n[!]Nombre de membres: ".help + memberCount + "\n[!]Nombre de serveurs: ".debug + servercount + "\n[!]Nom des servers :".data + servers)
	console.log('--------------------------------------------------------------------------'.error)
})//le lancement du bot

client.on("message", message => {
  const messagec = message.content;
if (message.content === prefix +'setgame'){
 if(message.author.id !=="175656408459640832")return;
 message.reply("**Le jeu vient d'être changé!**");
  client.user.setGame(`z!help | ${client.users.size} membres`)
}})

client.on('message', message => {
	const messagec = message.content;
	if (message.content.startsWith(prefix + 'botgame')){
 if(message.author.id !== "175656408459640832") return;
    message.reply('Fait');
      client.user.setGame(messagec.substr(9));
  }
})

client.on('message', message => {
	const messagec = message.content;
if (message.content.startsWith(prefix + 'botname')){
 if(message.author.id !== "175656408459640832") return;
 message.reply('Fait');
    client.user.setUsername(messagec.substr(9));
} 
})

client.on('message', message => {
	const messagec = message.content;
if (messagec.startsWith("z!help")){
   return message.channel.sendMessage("", {embed: {
    title: "La liste d'aide du bot:",
    color: 0X01ACD5,
    description:"● z!radio onefm : Pour lancer One FM\n● z!radio funradio : Pour lancer Fun Radio\n● z!radio skyrock : Pour lancer Skyrock FM\n● z!radio nrj : Pour lancer NRJ\n● z!radio gaming : Pour la radio secrete\n● z!radio stop : Pour arrêter la radio\n● z!roulette [message] : Pour faire un concours\n\n**Les commandes de ZeLocks**\n● z!botgame [message]\n● z!setgame\n● z!botname [message]",
    footer: {
      text: "Message par ZeLocksRadio's™."
    }
   }}).catch(console.error);
}});

client.on('message', message => {
if (message.content.startsWith(prefix + 'roulette ')) {
    var reason = message.content.split(' ').slice(1).join(' ');
    if(message.content.split(" ").length === 0) {
      return message.channel.send(`fais : ${prefix}roulette <message>`)
    }
    message.channel.sendMessage(`:trophy: Le gagnant du concours *${reason}* est *${message.guild.members.random().user.username}* :trophy:`)
  }
})

client.on('message', message => {
if (message.content.startsWith(prefix + 'radio onefm')) {
  if (message.member.voiceChannel) {
    message.member.voiceChannel.join()
      .then(connection => {
        const dispatcher = connection.playStream('http://onefm.ice.infomaniak.ch/onefm-high.mp3');
        const embed = new Discord.RichEmbed()
        .setColor(0xFE0002)
        .setTimestamp()
        .addField(':radio: | En lecture...', "One FM!")
        .setFooter(`Radio lancée par : ${message.author.username}`)
        message.channel.sendEmbed(embed)
      })
      .catch(console.log);
        } else {
    const embed = new Discord.RichEmbed()
    .setColor(0xFE0002)
    .setTimestamp()
    .addField(':radio: | Avant de lancer **One FM**...', "Rejoigniez un channel vocal!")
    .setFooter(`Radio lancée par : ${message.author.username}`)
    message.channel.sendEmbed(embed)
  }
}
})

client.on('message', message => {
if (message.content.startsWith(prefix + 'radio funradio')) {
  if (message.member.voiceChannel) {
    message.member.voiceChannel.join()
      .then(connection => {
        const dispatcher = connection.playStream('http://streaming.radio.funradio.fr/fun-1-44-64');
        const embed = new Discord.RichEmbed()
        .setColor(0xFD5BB2)
        .setTimestamp()
        .addField(':radio: | En lecture...', "Fun Radio!")
        .setFooter(`Radio lancée par : ${message.author.username}`)
        message.channel.sendEmbed(embed)
      })
      .catch(console.log);
      
  } else {
    const embed = new Discord.RichEmbed()
    .setColor(0xFD5BB2)
    .setTimestamp()
    .addField(':radio: | Avant de lancer **Fun Radio**...', "Rejoigniez un channel vocal!")
    .setFooter(`Radio lancée par : ${message.author.username}`)
    message.channel.sendEmbed(embed)
  }
}
})
client.on('message', message => {
if (message.content.startsWith(prefix + 'radio skyrock')) {
  if (message.member.voiceChannel) {
    message.member.voiceChannel.join()
      .then(connection => {
        const dispatcher = connection.playStream('http://icecast.skyrock.net/s/natio_mp3_128k?type=.mp3');
        const embed = new Discord.RichEmbed()
        .setColor(0x00ABC4)
        .setTimestamp()
        .addField(':radio: | En lecture...', "Skyrock Radio!")
        .setFooter(`Radio lancée par : ${message.author.username}`)
        message.channel.sendEmbed(embed)
      })
      .catch(console.log);
  } else {
    const embed = new Discord.RichEmbed()
    .setColor(0x00ABC4)
    .setTimestamp()
    .addField(':radio: | Avant de lancer **Skyrock FM**...', "Rejoigniez un channel vocal!")
    .setFooter(`Radio lancée par : ${message.author.username}`)
    message.channel.sendEmbed(embed)
  }
}
})
client.on('message', message => {
if (message.content.startsWith(prefix + 'radio gaming')) {
  if (message.member.voiceChannel) {
    message.member.voiceChannel.join()
      .then(connection => {
        const dispatcher = connection.playStream('http://frshoutcast.comunicazion.eu:8815/stream');
        const embed = new Discord.RichEmbed()
        .setColor(0xFFB200)
        .setTimestamp()
        .addField(':radio: | En lecture...', "Gaming Radio")
        .setFooter(`Radio lancée par : ${message.author.username}`)
        message.channel.sendEmbed(embed)
      })
      .catch(console.log);
  } else {
    const embed = new Discord.RichEmbed()
    .setColor(0xFFB200)
    .setTimestamp()
    .addField(':radio: | Avant de lancer **Gaming Radio**...', "Rejoigniez un channel vocal!")
    .setFooter(`Radio lancée par : ${message.author.username}`)
    message.channel.sendEmbed(embed)
  }
}
})

client.on('message', message => {
if (message.content.startsWith(prefix + 'radio nrj')) {
  if (message.member.voiceChannel) {
    message.member.voiceChannel.join()
      .then(connection => {
        const dispatcher = connection.playStream('http://cdn.nrjaudio.fm/audio1/fr/30001/mp3_128.mp3?origine=fluxradios');
        const embed = new Discord.RichEmbed()
        .setColor(0xBE0102)
        .setTimestamp()
        .addField(':radio: | En lecture...', "Radio NRJ")
        .setFooter(`Radio lancée par: ${message.author.username}`)// CORRIGE STP :'   C'EST QUOI QUE TU VEUT QUE JE CORRIGE J'te montre
        message.channel.sendEmbed(embed)
      })
      .catch(console.log);
  } else {
    const embed = new Discord.RichEmbed()
    .setColor(0xBE0102)
    .setTimestamp()
    .addField(':radio: | Avant de lancer **NRJ**...', "Rejoigniez un channel vocal!")
    .setFooter(`Radio lancée par : ${message.author.username}`)
    message.channel.sendEmbed(embed)
  }
}
})

client.on('message', message => {
if(message.content === prefix + "radio stop"){
  if(client.voiceChannel)
    return message.channel.sendMessage("Je ne suis pas dans un channel vocal.");
let voiceChannel = message.member.voiceChannel;
voiceChannel.leave()
};
})

client.login(process.env.BOT_TOKEN)
