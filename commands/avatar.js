module.exports = {
    name: 'avatar',
    description: "Shows user Avatar!",
    execute(message, args)
    {
            message.channel.send(message.author.avatarURL);
    }
}