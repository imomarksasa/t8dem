const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

 client.on('ready',async () => {
  console.log(client.user.username);
  try {
    const config = {
      name: "DISCO", // اسم الرتبة
      guildid: "493311786368630794", // اي دي السيرفر
      sec: 1 // عدد الثواني
    };
    let guild = client.guilds.get(config.guildid);
    let role = guild.roles.find(role => role.name === config.name);
    let sec = config.sec * 1000;
    if(!guild) return console.warn("Unkown guild.");
    if(!role) return console.warn("Unkown role");
    if(role.position >= guild.members.get(client.user.id).highestRole.position) return console.warn("Bot highest role must be above rainbow role");
    setInterval(() => {
      role.edit({ 
      color: "RANDOM"
    });
    }, sec);
  } catch(e) {
    console.error(e);
  }
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
