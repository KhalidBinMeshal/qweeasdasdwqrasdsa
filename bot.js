const Discord = require('discord.js');
const client = new Discord.Client();

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
  
client.login(process.env.BOT_TOKEN);
