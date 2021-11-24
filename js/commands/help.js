module.exports = {
	name: 'help',
	description: 'help',
	execute(msg, args) {
		try {
            const embed = new Discord.MessageEmbed()
                .setColor('#0000FF')
                .setTitle('Here are a list of commands to use')
                .setAuthor('Test bot')
                .addFields({
                    name: '//help',
                    value: 'The help command will return a list of commands that you can use'
                }, {
                    name: '//ping',
                    value: 'The ping command will return with the best possible answer'
                }, {
                    name: '//dm',
                    value: 'Send a DM on behalf of Realm Bot'
                }, {
                    name: '//tuff',
                    value: 'You dont want to find out'
                }, {
                    name: '//findmeanewfriend',
                    value: 'You really dont want to find this one out'
                }, {
                    name: '//dadjoke',
                    value:'Recieve a random dad joke'
                } )
                .setTimestamp()
                .setFooter('Realm bot gives you kisses');
            msg.channel.send(embed);
        }
        catch (err){
            error_messages(err)
        }
	},
};