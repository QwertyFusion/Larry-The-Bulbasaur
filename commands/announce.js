module.exports = {
    name: 'announce',
    description: "Announces given text in specified channel!",
    execute(message, args)
    {
        if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply('you do not have the required permissions!')
        {
            
            let argsresult;
            let mChannel = message.mentions.channels.first();
            message.delete();
            
            if(mChannel)
            {
                
                argsresult = args.slice(2).join(" ");
                if(!argsresult) return message.reply(`do you really want me to send a blank message? That's not even possible`);
                if(args[2] === '@everyone')
                {
                    mChannel.send(argsresult).then(messageReaction =>{
                    messageReaction.react("✅");})
                }
                else
                {
                    mChannel.send(argsresult);
                }
            
                
            }

            else
            {
                 argsresult = args.slice(1).join(" ");
                 if(!argsresult) return message.reply(`do you really want me to send a blank message? That's not even possible`);
                
                 if(args[1] === '@everyone')
                 {
                     message.channel.send(argsresult).then(messageReaction =>{
                     messageReaction.react("✅");})
                 }
                 else
                 {
                 message.channel.send(argsresult);
                 }
            }
        }
    }
}