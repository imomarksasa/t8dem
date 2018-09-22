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
client.channels.find('id', '492260558066810880').setName("W");
client.channels.find('id', '492260558066810880').setName("We");
client.channels.find('id', '492260558066810880').setName("Wel");
client.channels.find('id', '492260558066810880').setName("Welc");
client.channels.find('id', '492260558066810880').setName("Welco");
client.channels.find('id', '492260558066810880').setName("Welcom");
client.channels.find('id', '492260558066810880').setName("Welcome");
client.channels.find('id', '492260558066810880').setName("Welcome T");
client.channels.find('id', '492260558066810880').setName("Welcome To");
client.channels.find('id', '492260558066810880').setName("Welcome To A");
client.channels.find('id', '492260558066810880').setName("Welcome To Al");
client.channels.find('id', '492260558066810880').setName("Welcome To Alf");
client.channels.find('id', '492260558066810880').setName("Welcome To Alfg");
client.channels.find('id', '492260558066810880').setName("Welcome To Alfgmm");
  }, 3000);
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
