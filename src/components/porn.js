const fetch = require("node-fetch");
const Discord = require('discord.js');
const client = new Discord.Client();

const matches = ["nsfwgif", "boobs", "butts", "randnsfw"]

const urls = {
    nsfwgif: 'https://www.reddit.com/r/60fpsporn+NSFW_GIF+PornGifs/.json?limit=100',
    boobs: 'https://www.reddit.com/r/boobs+tittydrop+burstingout+bustypetite/.json?limit=100',
    butts: 'https://www.reddit.com/r/butts+pawg+paag+mooning+celebritybutts/.json?limit=100',
    randnsfw: 'https://www.reddit.com/r/randnsfw/.json?limit=100',
}


class Porn {
    static handlePorn(c, url) {
        fetch(url)
            .then(x => x.json())
            .then(res => {
                var index = Math.floor(Math.random() * res.data.children.length);
                while (res.data.children[index].data.url.includes("www.reddit") || !res.data.children[index].data.url.includes("pornhub")|| !res.data.children[index].data.url.includes("video")) {
                    this.handlePorn(c, url);
                }

                c.send("Found on /r/" + res.data.children[index].data.subreddit)
                c.send(res.data.children[index].data.url)
            })
            .catch(err => {
                c.send(err.message)
            })
    }

    static handle(message) {
        const arr = message.content.split(' ');
        const command = arr.shift().substr(1); // Maybe un-hardcode the length
        const args = arr;

        switch (command) {
            case "nsfwgif":
                for (var i = 0; i < parseInt(args[0]); i++)
                    this.handlePorn(message.channel, urls.nsfwgif);
                break;
            case "boobs":
                for (var i = 0; i < parseInt(args[0]); i++)
                    this.handlePorn(message.channel, urls.boobs);
                break;
            case "butts":
                for (var i = 0; i < parseInt(args[0]); i++)
                    this.handlePorn(message.channel, urls.butts);
                break;
            case "randnsfw":
            default:
                for (var i = 0; i < parseInt(args[0]); i++)
                    this.handlePorn(message.channel, urls.randnsfw);
                break;

        }

    }

    static match(message) {
        const command = message.content.split(' ').shift().substr(1); // Maybe un-hardcode the length
        return matches.includes(command);
    }
}

module.exports = Porn;