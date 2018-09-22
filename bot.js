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

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
