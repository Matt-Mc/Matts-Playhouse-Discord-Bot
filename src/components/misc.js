const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const client = new Discord.Client();

const matches = ["ping","pong","ding","dong"]

class Misc {
   static ping(c) {
      c.send("Pong");
   }

   static pong(c) {
      c.send("Ding Dong");
   }

   static handle(message) {
      const arr = message.content.split(' ');
      const command = arr.shift().substr(1); // Maybe un-hardcode the length
      const args = arr;

      if(command === 'ping')
         this.ping(message.channel);
      if(command === 'pong')
         this.pong(message.channel);
   }

   static match(message) {
      const command = message.content.split(' ').shift().substr(1); // Maybe un-hardcode the length
      return matches.includes(command);
   }
}

module.exports = Misc;
