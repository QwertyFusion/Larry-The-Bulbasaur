const Discord = require('discord.js');
const {Client, RichEmbed, Attachment} = require('discord.js');
const bot =new Client();

const token = 'Njc5NzgyOTg0NzE4NjE0NTU4.Xk2bhw.3yaBo2eJ3YCLiiwRqHtSWNszmg4';

const Prefix = 'Larry!';

const fs = require('fs');
bot.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles)
{
    const command = require(`./commands/${file}`);
    bot.commands.set(command.name, command);
}

const version = '1.0.0';
const ytdl = require('ytdl-core');
const colour = '0x00ff19';

var servers ={};

bot.on('ready', () => {
    console.log('This bot is online!');
    bot.user.setActivity('Tree Planting!🌱', {type: 'PLAYING'}).catch(console.error);
})

bot.on('guildMemberAdd', member => {
    bot.commands.get('Welcome').execute(member, RichEmbed, colour);
});

bot.on('message', message => {

    let args = message.content.substring(Prefix.length).split(" ");

    if(message.content.substring(0,Prefix.length) !== Prefix)
    {
        bot.commands.get('Larry').execute(message);
        
    }


    if(message.content.substring(0,Prefix.length) === Prefix)
    {
        switch(args[0])
        {
            case'':
                message.reply("You called me? My prefix is Larry!");
                break;

            case 'website': //sends website
                bot.commands.get('website').execute(message, args);
                break;

            case 'info': //sends information
                bot.commands.get('info').execute(message, args, colour, version, RichEmbed);
                break;

            case 'clear': //clears messages
                bot.commands.get('clear').execute(message, args, colour, RichEmbed);
                break;

            case 'avatar': //user picture
                bot.commands.get('avatar').execute(message, args);
                break;

            case 'help': //bot commands
                bot.commands.get('help').execute(message, args, colour, RichEmbed);
                break;

            case 'announce': //annouunces given text in specified channel
                bot.commands.get('announce').execute(message, args);
                break;

            case 'image': //searches requested image
                bot.commands.get('image').execute(message, args);
                break;               

            case 'play':
                bot.commands.get('play').execute(message, args, servers, ytdl);
                break;

            case 'poll':
                bot.commands.get('poll').execute(message, args, RichEmbed, colour);
                break;

            case 'addRole':
                bot.commands.get('addRole').execute(message, args);
                break;

            case 'profile':
                bot.commands.get('profile').execute(message, args, colour, RichEmbed);
                break;


                
        }
    }

})



bot.login(process.env.token);
