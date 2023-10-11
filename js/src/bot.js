import Discord from 'discord.js';
import fs from 'fs';

import { execute } from '../commands/ping.js';
import { discord_token, discord_prefix } from "../util/get_secret.js"    

const client = new Discord.Client();
const errorsChannel = '785640637952819261';
const realmGeneralChat = '436392919356801024';
const realmGuild = '402526389670117376';

client.on('ready', () => {
    console.log(`logged in as ${client.user.tag}!`);
    console.log(`logged in as ${client.user.id}!`);
});

client.on('message', msg => {
    if (!msg.content.startsWith(discord_prefix) || msg.author.bot) return;

    const args = msg.content.slice(discord_prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    console.log(command)

    client.commands = new Discord.Collection();
    const commandFiles = fs.readdirSync('/Users/e148654/Documents/Personal/discord_bot/js/commands').filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
        console.log(file)
        const cmd = import (`../commands/${file}`);
        client.commands.set(command, cmd);
    }
    console.log("BEFORE")
    if (!client.commands.has(command)) return;
    console.log("AFTER")

    try {
        console.log("EXECUTING");
        import(`../commands/${command}.js`).execute((msg, args) => {
            console.log("DONE1");
        });
        console.log("DONE2");
    } catch (error) {
        console.log(error);
        msg.reply("There was an error trying to execute that command!");
    }
});
client.login(discord_token);