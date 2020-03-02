module.exports = {
    name: 'addRole',
    description: "Assigns Role!",
    execute(message, args)
    {
        if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply('you do not have the required permissions!')
        {
                let mMember = message.guild.member(message.mentions.users.first());
                let mRoles = message.guild.roles.find(message.mentions.roles.first());
                if(!mMember) return message.reply(`do you really want me to give a role to no one?`);
                if(!mRoles) return message.reply(`do you really want me to give a blank role? That's not even possible`);
                if(mMember)
                {
                    
                    mMember.addRole(mRoles);
                    member.message.channel.send("Role Assigned!");
            }
        }
    }
}