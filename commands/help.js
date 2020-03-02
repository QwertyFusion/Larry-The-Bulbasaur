module.exports = {
    name: 'help',
    description: "Shows bot commands!",
    execute(message, args, colour, RichEmbed)
    {
        const channel = message.guild.channels.find(channel => channel.name === 'how-to-battle');
        const channel2 = message.guild.channels.find(channel => channel.name === 'how-to-recruit');
        const channel3 = message.guild.channels.find(channel => channel.name === 'rank-list');
        if(!args[1])
        {
        const embed =new RichEmbed()
        .setTitle('Select one:')
        .addField('1) **Larry!help bot**', 'Shows all of my commands!')
        .addField('2) **Larry!help battle**', 'Shows ways to battle in events')
        .addField('3) **Larry!help recruit**', 'Shows how to recruit new members')
        .addField('4) **Larry!help rank**', 'Shows how to rank up faster')
        .addField('5) **Larry!help games**', 'Show what games we play on CPO')
        .setColor(colour)
        .setFooter('Help page - 1/1 || Do Larry!help <category> to see the requested page')
        message.channel.send(embed);
        }

        if(args[1] === 'bot')
        {
        const embed2 =new RichEmbed()
        .setTitle('The available commands are:')
        .addField('1) **Larry!profile**', 'Use this to see your profile!')
        .addField('2) **Larry!website**', 'Get to see my official website')
        .addField('3) **Larry!info**', 'Get to see informations related to me')
        .addField('4) **Larry!website**', 'Get to see my official website')
        .addField('5) **Larry!avatar**','Get to see your avatar!')
        .addField('6) **Larry!announce <channel> <message>**', 'To announce the message in the specified channel')
        .addField('7) **Larry!announce <message>**', 'To announce the message in the current channel')
        .addField('8) **Larry!image <anything>**', 'Get a picture of the desired thing')
        .addField('9) **Larry!poll <anything>**', 'Start a poll on that topic in the current channel!')
        .addField('10) **Larry!clear <amount>**', 'Use this to clear the entered amount of messages')
        .setColor(colour)
        .setFooter('Bot Help page - 1/1')
        message.channel.send(embed2);
        }

        else if(args[1] === 'battle')
        {
            
            message.channel.send(`Visit ${channel} for detailed info. If you need any more help, contact QwertyFusion or AlphaLaura!`)
        }

        else if(args[1] === 'recruit')
        {
            message.channel.send(`Visit ${channel2} for detailed info. If you need any more help, contact QwertyFusion or AlphaLaura!`)
        }

        else if(args[1] === 'rank')
        {
            message.channel.send(`Visit ${channel3} for detailed info. If you need any more help, contact QwertyFusion or AlphaLaura!`)
        }

        else if(args[1] === 'games')
        {
            const embed =new RichEmbed()
        .setTitle('The games we play on CPO are:')
        .addField('1) **Sled Race**', 'Sled Racing Tournament')
        .addField('2) **Hide and Seek**', 'You can be a Seeker or a Hider!')
        .addField('3) **Dance Contest**', 'Show me your skills!')
        .addField(`4) **Card Jitsu**', 'Who's the better ninja?`)
        .addField('5) **Fashion Show**','Do you know fashion?')
        .addField('6) **Puffle Show**', 'Whats the best puffle you got?')
        .setColor(colour)
        .setFooter('Game Help page - 1/1')
        message.channel.send(embed);
        }
    }
}