//if(!args[1] === Number) return message.reply('Please enter an integer')

module.exports = {
    name: 'clear',
    description: "Clears the inputted number of text messages!",
    execute(message, args, colour, RichEmbed)
    {
        if(message.member.hasPermission("MANAGE_MESSAGES"))
        {
            if(!args[1]) return message.reply('error please define number of messages which you want to delete!')
            {

                var limit = '';

                if(args[1] === 'all')
                {
                    args[1] = 100;
                }
                else if(args[1] > 100)
                {
                    args[1] = 100;
                    limit = 'Clear Limit is capped to 100 messages per use.';
                }
                
                message.channel.bulkDelete(args[1])

                const embed3 =new RichEmbed()
                .setTitle(`Succesfully cleared ${args[1]} messages!\n${limit}`)
                .setColor(colour)
                .setFooter('Thanks for using!');

                message.channel.send(embed3)
                .then(msg => msg.delete(5000));

            }
            
        }
        else
        {
            return message.reply('you do not have permissions to use this command!')
        }
    }
}