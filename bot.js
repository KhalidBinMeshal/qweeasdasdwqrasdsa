const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = &

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);

client.on("message", msg => {
    if(msg.content.startsWith("blocks")){
        const embed = new Discord.RichEmbed()
        blocksmc.player(msg.content.split(" ").slice(1)).then(player => {
            player.map(g => {
               
                embed.addField(g.game, `    Kills: ${g.stats.Kills} \n      Deaths: ${g.stats.Deaths}`, true)
                
            });
            msg.channel.send(embed)
        }); 
       
    }
});
  hero.on('message', async message => {
  if(message.author.bot || message.channel.type === 'dm') return;
  
  if(!message.content.startsWith(prefix)) return;
  
  let messageArray = message.content.split(" ");
  let args = messageArray.slice(1);
  let cmd = messageArray[0].substring(prefix.length).toLowerCase();
  
  if(cmd === 'mc') {
      if(!args[0]) return message.reply("Play.ReQuezMC.net");
      
      fetch(`https://api.mcsrvstat.us/2/${args[0]}`)
      .then(res => res.json())
      .then(async res => {

          let {version, players, online, ip, port, motd, mods, software, map} = res;
          let i = new RichEmbed();

          if(online === false) {
              await i.addField(`Status`, `» **Offline**`);
              await i.setFooter(`The server is offline so i can't fetch the data.`);
          } else if(online === true) {
              await i.setAuthor(`${ip}:${port}`, message.author.avatarURL);
              await i.addField(`Status`, `» **Online**`);
              await i.addField(`Version`, `» **${res.version}**`);
              await i.addField(`Players`, `» **${players.online} / ${players.max}**`);
              if(mods) await i.addField(`Mods`, `» ${mods.names.join(", ")}`);
              if(software) await i.addField(`Software`, `» ${software}`);
              if(map) await i.addField(`Map`, `» ${map}`);
              await i.addField(`MOTD`, `» ${motd.clean.map(r => `**${r}**`).join('\n')}`);
          }
          
          await message.channel.send(i);
      });
  }
});
  
client.login(process.env.BOT_TOKEN);
