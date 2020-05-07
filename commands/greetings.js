module.exports = {
    name: 'greetings',
    description: "Welcomes new members!",
    execute(member, RichEmbed, colour)
    {
        const channel = member.guild.channels.find(channel => channel.name === 'main-chat');
        const channel2= member.guild.channels.find(channel => channel.name === 'uniform');
        const channel3= member.guild.channels.find(channel => channel.name === 'event-infon');
        const channel4= member.guild.channels.find(channel => channel.name === 'role-menu');
        channel.send(`${member} just now joined **The Tree Cult**! Welcome to The Tree Cult Family! You are the ${member.guild.memberCount} member!\n🌱 Check out Event Information → ${channel3}\n🌱 Check out the uniform → ${channel2}\n🌱 Get Roles from Role Menu → ${channel4}\n🌿 MAKE SURE YOU ATTEND THE HUGE BATTLES FOR HUGE PRIZES AND PROMOTION\n🌿 Visit our website at **treecultofcpo.wordpress.com**`);      

        const embed7 =new RichEmbed()
        .setTitle(`Hello I am Larry The Bulbasaur!🌱`)
        .addField(`Welcome to Tree Cult Family!\nHave a great time here in The Tree Cult!`, `Feel free to invite your firends and play Club Penguin Official over here!\nStay with us and help the army to grow!🌿`)
        .setColor(colour)
        member.send(embed7);
        
    }
}
