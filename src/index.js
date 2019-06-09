const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const client = new Discord.Client();
const dotenv = require('dotenv').config();

const prefix = process.env.DISCORD_API_PREFIX;
const token = process.env.DISCORD_API_TOKEN;

const misc = require('./components/misc.js');
const porn = require('./components/porn.js');
const youtube = require('./components/youtube.js')
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
});

client.login(token)
    .then(success => console.log("Ready"))
    .catch(err => console.log(err));
