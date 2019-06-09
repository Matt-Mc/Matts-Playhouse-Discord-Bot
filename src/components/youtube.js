const Discord = require('discord.js');
const ytdl = require('ytdl-core');

const matches = ["play", "stop", "earrape", "fuckmybutt", "kermit", "playnext", "clearqueue", "reset"]

const earrape = "https://www.youtube.com/watch?v=trG8nQF1HiM"
const fuckMyButt = "https://www.youtube.com/watch?v=vLJL4mPh03g";
const kermit = "https://www.youtube.com/watch?v=2RYOo63wKOI";

function Youtube() {

    previousTimeout = 1;
    nowPlaying = false;
    queue = [];

    this.play = (message, url) => {
        if (nowPlaying) {
            message.channel.send("Something is already playing, added to queue");
            queue.push(url);
            return;
        }
        if((url === undefined || url === "") && queue.length > 0){
            url = queue.pop();
        }
        clearTimeout(previousTimeout);
        message.channel.send("Playing " + url)
        if (message.member.voiceChannel) {
            message.member.voiceChannel.join().then(connection => {
                var stream = ytdl(url, { filter: 'audioonly' })
                    .on("error", e => { console.error(error); message.channel.send("Oppsie Whoopsie, I couldnt play that UwU"); })
                var dispatcher = connection.playStream(stream);
                nowPlaying = true;
                dispatcher.on('end', c => {
                    nowPlaying = false;
                    if (queue.length >= 1)
                        this.play(message, queue.pop());
                    previousTimeout = setTimeout(() => {
                        message.member.voiceChannel.leave()
                        previousTimeout = {};
                    }, 5 * 60 * 1000) // Leave the channel after 5 minutes unless someone else plays something
                });
            });
        }
    }

    this.reset = (message) => {
        message.channel.send("Reset bot's music.")
        nowPlaying = false;
        queue = [];
        message.member.voiceChannel.leave()
    }

    this.clearQueue = (message) => {
        message.channel.send("Clearing Queue, removed " + queue.length + " items.")
        queue = [];
    }

    this.enqueue = (message, url) => {
        if (nowPlaying){
            message.channel.send("Adding " + url + " to the queue")
        }
        queue.push(url);
        if (!nowPlaying){
            this.play(message, queue.pop());
        }
    }

    this.stop = (message) => {
        var kekFactor = Math.floor(Math.random() * 1000)
        if (kekFactor === 420)
            message.channel.send("no")
        else {
            nowPlaying = false;
            queue = [];
            message.member.voiceChannel.leave()
        }
    }

    this.handle = (message) => {
        const arr = message.content.split(' ');
        const command = arr.shift().substr(1); // Maybe un-hardcode the length
        const args = arr;

        if (command === 'play')
            this.play(message, args[0]);
        if (command === 'stop')
            this.stop(message);

        if (command === 'enqueue')
            this.enqueue(message, args[0]);
        if (command === 'clearqueue')
            this.clearQueue(message);
        if (command === 'reset')
            this.reset(message);

        if (command === 'earrape')
            this.play(message, earrape);
        if (command === 'fuckmybutt')
            this.play(message, fuckMyButt);
        if (command === 'kermit')
            this.play(message, kermit);
    }

    this.match = (message) => {
        console.log("Matched youtube")
        const command = message.content.split(' ').shift().substr(1); // Maybe un-hardcode the length
        return matches.includes(command);
    }
}

module.exports = new Youtube();
