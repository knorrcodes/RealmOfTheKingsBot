import Discord from 'discord.js';

export function execute(msg, args) {
    try {
        const embed = new Discord.MessageEmbed()
            .setColor('#0000FF')
            .setTitle('Here are a list of commands to use')
            .setAuthor('Realm of The Kings - Realm Bot')
            .addFields(
            {
                name: '//help',
                value: 'The help command will return a list of commands that you can use'
            },
            {
                name: '//medal',
                value: `This will grab your most recent clip from Medal.tv and post to the clips and vids channel. 
                        Reach out to @Dominator of Degenerates if you have not been registered for the command yet`
            },
            {
                name: '//ping',
                value: 'The ping command will return with the best possible answer'
            },
            {
                name: '//dm',
                value: 'Send a DM on behalf of Realm Bot'
            },
            {
                name: '//tuff',
                value: 'You dont want to find out'
            },
            {
                name: '//findmeanewfriend',
                value: 'You really dont want to find this one out'
            },
            {
                name: '//dadjoke',
                value:'Recieve a random dad joke'
            }
            )
            .setTimestamp()
            .setFooter('Realm bot gives you kisses');
        msg.channel.send(embed);
    }
    catch (err){
        console.log(err)
    }
}