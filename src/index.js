const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const client = new Discord.Client();
const dotenv = require('dotenv').config();

const prefix = process.env.DISCORD_API_PREFIX;
const token = process.env.DISCORD_API_TOKEN;

const misc = require('./components/misc.js');
const porn = require('./components/porn.js');
<<<<<<< HEAD
const youtube = require('./components/youtube.js');
=======
const youtube = require('./components/youtube.js')
>>>>>>> 0640ec2361c890df81796170f7fbf0c322064c33
const greeter = require('./components/greeter.js');
client.on('guildMemberAdd', greeter);

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const arr = message.content.substr(prefix.length).split(' ');
    const command = arr.shift();
    const args = arr;

    if (misc.match(message))
        misc.handle(message);
    if (porn.match(message))
        porn.handle(message);
    if (youtube.match(message))
        youtube.handle(message);
<<<<<<< HEAD

    /*
    if (message.content === `${prefix}ping`) {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('Pong.');
    } else if (message.content === `${prefix}server`) {
        message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
    } else if (message.content.includes(`${prefix}play`)) {
        // Only try to join the sender's voice channel if they are in one themselves
        if (message.member.voiceChannel) {
            message.member.voiceChannel.join().then(connection =>{
                stream = ytdl(args[0],{ filter: 'audioonly' }).on("error",e => { console.error(error); message.channel.send("Oppsie Whoopsie, I couldnt play that UwU");})
                connection.playStream(stream);
            });
        }
    } else if (message.content.includes(`${prefix}stop`)) {
          message.member.voiceChannel.leave()
    }
    */
=======
>>>>>>> 0640ec2361c890df81796170f7fbf0c322064c33
});

client.login(token)
    .then(success => console.log("Ready"))
    .catch(err => console.log(err));
