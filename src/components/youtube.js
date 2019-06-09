const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const client = new Discord.Client();

class youtube {
    static handle(message) {
        const arr = message.content.split(' ');
        const command = arr.shift().substr(1); // Maybe un-hardcode the length
        const args = arr;

        switch (command) {
            case "start":
                if (message.member.voiceChannel) {
                    // Only try to join the sender's voice channel if they are in one themselves
                    message.member.voiceChannel.join().then(connection =>{
                        stream = ytdl(args[0],{ filter: 'audioonly' }).on("error",e => { console.error(error); message.channel.send("Oppsie Whoopsie, I couldnt play that UwU");})
                        connection.playStream(stream);
                    });
                }
                break;
            case "stop":
                message.member.voiceChannel.leave()
                break;
        }
    }

    static match(message) {
        const command = message.content.split(' ').shift().substr(1); // Maybe un-hardcode the length
        return matches.includes(command);
    }


}

module.exports = youtube;
