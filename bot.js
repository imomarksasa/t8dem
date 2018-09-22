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

client.on('message',async function (message) =>  {
const prefix = "#";
if (message.content.startsWith(prefix+'تقديم'))
    {
        var members = []
        let evidence = message.content.split(" ").slice(1,2).join(" ")
        let reason = message.content.split(" ").slice(2).join(" ")
        if (!reason) return message.reply(`**${prefix}apply [ كم صار لك يوم في الدسكورد] [وش الاوامر الي تعرفها]**`)
        if(!evidence.match(linkreg)) return message.channel.send(`**${prefix}apply [كم صار لك يوم في الدسكورد] [وش الاوامر الي تعرفها]**`)
        if(!evidence) return message.reply(` راجا انتضر رد الادارة`)
        var embed = new Discord.RichEmbed()
            .setTitle(`تقديم من ${message.author.username}`)
            .addField(`التقديم`, "**`\`\`\"+ reason + "`\`\`\**")
            .addField(`معلومات اضافيه`, evidence)
            .setColor(`GREEN`)
            client.channels.get("492265800347156500").send(embed)
            members.push(message.author.id);
            message.channel.send(`${mentions} تم تقديم طلبك...`)
        }  
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
