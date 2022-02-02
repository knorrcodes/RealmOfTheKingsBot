const Discord = require('discord.js');
const client = new Discord.Client();
const https = require('https')
const {
    prefix,
    token
} = require('./config.json');
const fs = require('fs')

errorsChannel = '785640637952819261';
realmGeneralChat = '436392919356801024';

client.on('ready', () => {
    console.log(`logged in as ${client.user.tag}!`);
    console.log(`logged in as ${client.user.id}!`);
});

client.on('message', msg => {
    if (!msg.content.startsWith(prefix) || msg.author.bot) return;

    const args = msg.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    client.commands = new Discord.Collection();
    const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

    for (const file of commandFiles) {
        const cmd = require(`./commands/${file}`);
        client.commands.set(cmd.name, cmd);
    }

    if (!client.commands.has(command)) return;

    try {
        client.commands.get(command).execute(msg, args);
    } catch (error) {
        console.log(error);
        msg.reply("There was an error trying to execute that command!");
    }
});
client.login(token);










// jons tiny penis command
    // else if (command === 'tinypenisplease') {
    //     msg.channel.send("Here you go...", {
    //         files: [
    //             "images/jknop2.PNG"
    //         ]
    //     });
    // }


    



// client.on('guildMemberAdd', (member) => {
//     //targetChannel = Discord.Guild.channel.cache.get(realmGeneralChat);
//     member.guild.channels.get(errorsChannel).send(`Welcome to Realm of The Kings ${member.displayName}! Make sure to stay safe and stay cute. Have fun!`)
    
// });

// function error_messages(st) {
//     client.channels.cache.get(errorsChannel).send(st);
// }

// function sleep (time) {
//     return new Promise((resolve) => setTimeout(resolve, time));
//   }
