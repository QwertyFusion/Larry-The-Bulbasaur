module.exports = {
    name: 'help',
    description: "Shows bot commands!",
    execute(message, args, colour, RichEmbed)
    {
        if(!args[1])
        {
        const embed =new RichEmbed()
        .setTitle('Select one:')
        .addField('1) **Larry!help bot**', 'Shows all of my commands!')
        .addField('2) **Larry!help games**', 'Show what games we play!')
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

        else if(args[1] === 'games')
        {
            const embed =new RichEmbed()
        .setTitle('The games we play on CPO are:')
        .addField('1) **Transformice**', 'Online Browser Game!')
        .addField('2) **Roblox**', 'A Multiplayer Game!')
        .addField('3) **Minecraft**', 'Everyone knows!')
        .addField(`4) **Krunker.io**', 'Online Browser Game`)
        .addField('5) **San Andreas Multiplayer**','You can even play with a cracked San Adndreas Game!')
        .setColor(colour)
        .setFooter('Game Help page - 1/1  ||  If you want to add any game or need any help, contact the Admins.')
        message.channel.send(embed);
        }
    }
}
