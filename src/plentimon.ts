import { Client } from 'discord.js';

const bot: Client = new Client();

bot.on("message", msg => {
  msg.reply("Hello world!");
});
