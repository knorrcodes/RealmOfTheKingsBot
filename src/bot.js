import Discord from 'discord.js';
import fs from 'fs';

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

    client.commands = new Discord.Collection();
    const commandFiles = fs.readdirSync('../commands').filter(file => file.endsWith('.js'));
    try {
        if ( commandFiles.includes(`${command}.js`) ) {
            import (`../commands/${command}.js`).then(
                funct => {
                    console.log(funct.execute(msg, args));
                }
            )
        }
        else
            msg.reply(`Doesnt look like we currently have a command for ${discord_prefix}${command}!`)

    } catch (error) {
        console.log(error);
        msg.reply("There was an error trying to execute that command!");
    }
});
client.login(discord_token);
