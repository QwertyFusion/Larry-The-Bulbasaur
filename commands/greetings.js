module.exports = {
    name: 'greetings',
    description: "Welcomes new members!",
    execute(member, RichEmbed, colour)
    {
        const channel = member.guild.channels.find(channel => channel.name === 'main-chat');
        const channel2= member.guild.channels.find(channel => channel.name === 'new-uniform');
        const channel3= member.guild.channels.find(channel => channel.name === 'event-information');
        const channel4= member.guild.channels.find(channel => channel.name === 'games-information');
        channel.send(`${member} just now joined **The Tree Cult**! Welcome! You are the ${member.guild.memberCount} member!\n🌱 Check out Event Information → ${channel3}\n🌱 Check out the uniform → ${channel2}\n🌱 Check out The Games → ${channel4}\n🌿 MAKE SURE YOU ATTEND THE HUGE BATTLES FOR HUGE PRIZES AND PROMOTION\n🌿 Visit our website at https://treecultofcpo.wordpress.com`);      

        const embed7 =new RichEmbed()
        .setTitle(`Hello I am Larry The Bulbasaur!🌱`)
        .addField(`Have a great time here in The Tree Cult!`, `Feel free to invite your firends and play Club Penguin Official over here!\nStay with us and help the army to grow!🌿`)
        .setColor(colour)
        member.send(embed7);
        
    }
}
