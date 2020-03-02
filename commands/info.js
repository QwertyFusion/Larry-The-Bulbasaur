module.exports = {
    name: 'info',
    description: "Provides Bot Informations",
    execute(message, args, colour, version, RichEmbed)
    {
        if(args[1] === 'author')
                {    
                    message.channel.send('**QwertyFusion#7420** created me!');
                }
                else if(args[1] === 'version')
                {
                    message.channel.send('Well, my Version is v'+ version+'!');
                }
                else if(args[1] === 'release')
                {
                    message.channel.send('My release date is **February 21, 2020**! Yeah! I am born on the **First Event Day** of **The Tree Cult**!');
                }
                else if(args[1] === 'server')
                {
                    message.channel.send(`**Server name:** ${message.guild.name}\n**Total members:** ${message.guild.memberCount}`);
                }
                else
                {
                    const embed1 =new RichEmbed()
                    .setTitle('The available information:')
                    .addField('1) **Larry!info author**', 'Get to know who created me')
                    .addField('2) **Larry!info version**', 'Get to know my version')
                    .addField('3) **Larry!info release**', 'Get to know my release date')
                    .addField('4) **Larry!info server**', 'Get to know about the Server!')
                    .setColor(colour)
                    .setFooter('Info page - 1/1')
                    message.channel.send(embed1);
                }
    }
}