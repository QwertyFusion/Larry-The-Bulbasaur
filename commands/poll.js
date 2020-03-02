module.exports = {
    name: 'poll',
    description: "Voting/Poll!",
    execute(message, args, RichEmbed, colour)
    {

        if(message.member.hasPermission("MANAGE_MESSAGES"))
        {
            const embed4 =new RichEmbed()
            .setTitle(`Initiate Poll`)
            .addField('Use Larry!poll <voting text>', 'To initiate a simple yes/no poll!')
            .setColor(colour)
            .setFooter('Use Larry!help to see other commands!')

            if(!args[1]) 
            {
                message.channel.send(embed4);
                return;
            }

            let msgArgs = args.slice(1).join(" ");
            message.channel.send("📋 "+"@everyone " + msgArgs).then(messageReaction =>{
                messageReaction.react("✅");
                messageReaction.react("❌");

            })
            message.delete(2500).catch(console.error);
        }
    }
}