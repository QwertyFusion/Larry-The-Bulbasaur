module.exports = {
    name: 'greetings',
    description: "Welcomes new members!",
    execute(member, RichEmbed, colour)
    {
        const channel = member.guild.channels.find(channel => channel.name === 'welcome');
        const channel2= member.guild.channels.find(channel => channel.name === 'uniform');
        const channel3= member.guild.channels.find(channel => channel.name === 'event-information');
        const channel4= member.guild.channels.find(channel => channel.name === 'how-to-battle');
        channel.send(`${member} just now joined **The Tree Cult**! Welcome! You are the ${member.guild.memberCount} member!
        🌱 Check out Event Information → ${channel3}
        🌱 Check out the uniform → ${channel2}
        🌱 Check out how to battle → ${channel4}
        🌿 MAKE SURE YOU ATTEND THE HUGE BATTLES FOR HUGE PRIZES AND PROMOTION`);      

        const embed7 =new RichEmbed()
        .setTitle(`Hello I am Larry The Bulbasaur!🌱`)
        .addField(`Have a great time here in The Tree Cult!`, `Feel free to invite your firends and play Club Penguin Official over here!\nStay with us and help the army to grow!🌿`)
        .setColor(colour)
        member.send(embed7);
        
    }
}