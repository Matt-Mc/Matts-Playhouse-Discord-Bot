const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const client = new Discord.Client();

require('dotenv').config()
const { prefix, token } = { prefix: process.env.DISCORD_API_PREFIX, token: process.env.DISCORD_API_TOKEN }

client.once('ready', () => {
    console.log('Ready!');
});


client.on('guildMemberAdd', member => {
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.find(ch => ch.name === 'general');
    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
    // Send the message, mentioning the member
    channel.send(`Welcome to the server bitch, ${member}`);
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(' ');
    const command = args.shift().toLowerCase();

    if (message.content === `${prefix}ping`) {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('Pong.');
    } else if (message.content === `${prefix}server`) {
        message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
    } else if (message.content.includes(`${prefix}play`)) {
        // Only try to join the sender's voice channel if they are in one themselves
        if (message.member.voiceChannel) {

            const connection = message.member.voiceChannel.join().then(connection =>{

                stream = ytdl(args[0],{ filter: 'audioonly' }).on("error",e => { console.error(error); message.channel.send("Oppsie Whoopsie, I couldnt play that UwU");})

                connection.playStream(stream);

            });

        }


    } else if (message.content.includes(`${prefix}stop`)) {
          message.member.voiceChannel.leave()
    }
});



client.login(token);
