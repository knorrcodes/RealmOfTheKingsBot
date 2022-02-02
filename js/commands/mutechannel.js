module.exports = {
	name: 'mc',
	description: 'mute channel',
	execute(message, args) {
        if (msg.member.voice.channel) {
            let channel = msg.guild.channels.cache.get(msg.member.voice.channel.id);
           
            for (const [memberID, member] of channel.members) {
              // I added the following if statement to mute everyone but the invoker:
              // if (member != message.member)
          
              // This single line however, nested inside the for loop, should mute everyone in the channel:
              member.voice.setMute(true).catch(data => console.log(data));
            }
          } else {
            msg.reply('You need to join a voice channel first!');
          }
        
        // mems = msg.member.voice.channel.members;
        // mems.forEach(x => {
        //     console.log(x.id)
	},
};