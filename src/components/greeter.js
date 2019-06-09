module.exports = () => {
    const channel = member.guild.channels.find(ch => ch.name === 'general');

    // Do nothing if the channel wasn't found on this server
    if (!channel) return;

    // Send the message, mentioning the member
    channel.send(`Welcome to the server bitch, ${member}`);
};
