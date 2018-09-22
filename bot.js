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

  const bannedwords = [
  "#credit",
  "#profile",
  "#rep",
  "#top",
  "%level",
  "%تقديم",
  "-play",
  "-stop",
  "-p",
  "-s",
  "!invites",
  "!top",
  "G.play",
  "G.stop",
  "G.skip",
  "-skip"

]
client.on('message', message => {
  var Muted = message.guild.roles.find("name", "muted");
  var warn = message.guild.roles.find("name", "warn");
  if(bannedwords.some(word => message.content.includes(word))) {
  if(message.channel.id !== '492814243662528532') return;
  if (message.author.bot) return;
  if(message.member.roles.has(warn)) return;
  if(!message.member.roles.has(warn.id)) {
  message.member.addRole(warn)
  message.reply("تم اعطائك تحذير لاستخدام اوامر البوت فى الشات العام ")
  }
  if(message.member.roles.has(warn.id)) {
      message.member.addRole(Muted)
      message.member.removeRole(warn)
      message.reply("تم اعطائك ميوت كتابى تواصل مع احد اعضاء الادارة لازالتة ")
  }
  }
  }) 


//By ReBeL //By ReBeL 
//جميع الحقوق محفوظهه لريبل فقط . 
client.on("ready", async  => {
setInterval(function(){
client.channels.find('id', '492260558066810880').setName("N");
client.channels.find('id', '492260558066810880').setName("No");
client.channels.find('id', '492260558066810880').setName("Not");
client.channels.find('id', '492260558066810880').setName("E");
client.channels.find('id', '492260558066810880').setName("Ev");
client.channels.find('id', '492260558066810880').setName("Eve");
client.channels.find('id', '492260558066810880').setName("Even");
client.channels.find('id', '492260558066810880').setName("Evene");
client.channels.find('id', '492260558066810880').setName("Evenet");
client.channels.find('id', '492260558066810880').setName("T");
client.channels.find('id', '492260558066810880').setName("To");
client.channels.find('id', '492260558066810880').setName("Tod");
client.channels.find('id', '492260558066810880').setName("Toda");
client.channels.find('id', '492260558066810880').setName("Today!");  
  }, 3000);
});

client.on('guildMemberAdd', member => {
    member.guild.channels.get('492792418253668353').setName(`Total Users: ${member.guild.memberCount}`);
    });
    client.on('guildMemberRemove', member => {
    member.guild.channels.get('492792418253668353').setName(`Total Users: ${member.guild.memberCount}`);
    });    
        


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
