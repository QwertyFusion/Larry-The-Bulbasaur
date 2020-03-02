module.exports = {
    name: 'profile',
    description: "Show User Profile!",
    execute(message, args, colour, RichEmbed)
    {

        var Staff = 'No';
        var QwertyBuddy = 'No';
        var Head = 'No';
        var Moderator = 'No';
        var Role = 'New Seed Warrior';
        var Nitro = 'No';
        var Timezone = 'Not assigned';
        var LauraBF = 'No';
        var RPoints = 0;
        var Invites = 0;
        var Work = 'Not Assigned';

        if(message.member.roles.find(role => role.name === "Nitro Boosters 💠"))
        {
            Nitro = 'Yes';
        }
       
        if(message.member.roles.find(role => role.name === "🌻 Qwerty's Buddy"))
        {
            QwertyBuddy = 'Yes';
        }
        
        if(message.member.roles.find(role => role.name === "🌞 Laura's Best Friend"))
        {
            LauraBF = 'Yes';
        }
        
        if(message.member.roles.find(role => role.name === "🎄 Forest Godfather"))
        {
            Head = 'Yes';
            Role = '🎄 Forest Godfather';
            Staff = 'Yes';
            Moderator = 'Yes';
        }

        if(message.member.roles.find(role => role.name === "🎄 Forest Godmother"))
        {
            Head = 'Yes';
            Role = '🎄 Forest Godmother';
            Staff = 'Yes';
            Moderator = 'Yes';
        }

        if(message.member.roles.find(role => role.name === "🎄 Forest Commander Supreme"))
        {
            Head = 'Yes';
            Role = '🎄 Forest Commander Supreme';
            Staff = 'Yes';
            Moderator = 'Yes';
        }
        
        if(message.member.roles.find(role => role.name === "🌸 Forest Commander Rank 3"))
        {
            Moderator = 'Yes';
            Role = '🌸 Forest Commander Rank 3';
            Staff = 'Yes';
        }

        if(message.member.roles.find(role => role.name === "🌸 Forest Commander Rank 2"))
        {
            Moderator = 'Yes';
            Role = '🌸 Forest Commander Rank 2';
            Staff = 'Yes';
        }
        
        if(message.member.roles.find(role => role.name === "🌷 Forrest Commander in Training"))
        {
            Role = '🌷 Forrest Commander in Training';
            Staff = 'Yes';
        }
        else if(message.member.roles.find(role => role.name === "🌷 Forrest Warrior Lord"))
        {
            Role = '🌷 Forrest Warrior Lord';
            Staff = 'Yes';
        }
        else if(message.member.roles.find(role => role.name === "🌷 Senior Tree Guardian"))
        {
            Role = '🌷 Senior Tree Guardian';
            Staff = 'Yes';
        }
        else if(message.member.roles.find(role => role.name === "🌷 Junior Tree Guardian"))
        {
            Role = '🌷 Junior Tree Guardian';
            Staff = 'Yes';
        }
        else if(message.member.roles.find(role => role.name === "🌲 Experienced Evergreen Tree Warrior"))
        {
            Role = '🌲 Experienced Evergreen Tree Warrior';
        }
        else if(message.member.roles.find(role => role.name === "🌲 Worthy Evergreen Tree Warrior"))
        {
            Role = '🌲 Worthy Evergreen Tree Warrior';
        }

        else if(message.member.roles.find(role => role.name === "🍎 Fruitful Tree Warrior"))
        {
            Role = '🍎 Fruitful Tree Warrior';
        }

        else if(message.member.roles.find(role => role.name === "🌼 Flowering Tree Warrior"))
        {
            Role = '🌼 Flowering Tree Warrior';
        }

        else if(message.member.roles.find(role => role.name === "🌲 Evergreen Tree Warrior"))
        {
            Role = '🌲 Evergreen Tree Warrior';
        }

        else if(message.member.roles.find(role => role.name === "🌳 Experiencing Tree Warrior"))
        {
            Role = '🌳 Experiencing Tree Warrior';
        }

        else if(message.member.roles.find(role => role.name === "🌴 New Tree Warrior"))
        {
            Role = '🌴 New Tree Warrior';
        }

        else if(message.member.roles.find(role => role.name === "🌵 Experienced Bush Warrior"))
        {
            Role = '🌵 Experienced Bush Warrior';
        }

        else if(message.member.roles.find(role => role.name === "🌺 Flowering Bush Warrior"))
        {
            Role = '🌺 Flowering Bush Warrior';
        }

        else if(message.member.roles.find(role => role.name === "🌾 New Bush Warrior"))
        {
            Role = '🌾 New Bush Warrior';
        }

        else if(message.member.roles.find(role => role.name === "🌿 Sapling Warrior"))
        {
            Role = '🌿 Sapling Warrior';
        }

        else if(message.member.roles.find(role => role.name === "🌱 Seedling Warrior"))
        {
            Role = '🌱 Seedling Warrior';
        }

        else if(message.member.roles.find(role => role.name === "Germinating Seed Warrior"))
        {
            Role = 'Germinating Seed Warrior';
        }
        
        else if(message.member.roles.find(role => role.name === "🦋 Visiting Butterflies"))
        {
            Role = '🦋 Visiting Butterflies';
        }

        if(message.member.roles.find(role => role.name === "UK"))
        {
            Timezone = 'GMT/UK';
        }
        else if(message.member.roles.find(role => role.name === "PST"))
        {
            Timezone = 'PST';
        }
        else if(message.member.roles.find(role => role.name === "EST"))
        {
            Timezone = 'EST';
        }
        else if(message.member.roles.find(role => role.name === "IST"))
        {
            Timezone = 'IST';
        }
        else if(message.member.roles.find(role => role.name === "GMT"))
        {
            Timezone = 'GMT/UK';
        }
        else if(message.member.roles.find(role => role.name === "CST"))
        {
            Timezone = 'CST';
        }
        else if(message.member.roles.find(role => role.name === "MST"))
        {
            Timezone = 'MST';
        }

        if(message.member.roles.find(role => role.name === "SCHOOL"))
        {
            Work = 'SCHOOL';
        }
        else if(message.member.roles.find(role => role.name === "COLLEGE"))
        {
            Work = 'COLLEGE';
        }
        else if(message.member.roles.find(role => role.name === "UNIVERSITY"))
        {
            Work = 'UNIVERSITY';
        }
        else if(message.member.roles.find(role => role.name === "ADULT"))
        {
            Work = 'ADULT';
        }


        const embed =new RichEmbed()
        .setTitle(`Player Profile:`)
        .addField('Name:', message.author, true)
        .addField('Highest Role:', Role, true) 
        .addField('Nitro Booster:', Nitro, true)
        .addField('Head:', Head, true)
        .addField('Moderator:', Moderator, true)
        .addField('Staff:', Staff, true)
        .addField(`Qwerty's Buddy:`, QwertyBuddy, true)
        .addField(`Laura's Best Friend:`, LauraBF, true)
        .addField('Timezone:', Timezone, true)
        .addField('Main Work:', Work, true)
        .addField('Invites', Invites, true)
        .addField('Rank Points', RPoints, true)
        .setColor(colour)
        .setThumbnail(message.author.avatarURL)
        message.channel.send(embed);
    }
}