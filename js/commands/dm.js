module.exports = {
	name: 'dm',
	description: 'dm',
	execute(message, args) {
		try {
            client.users.cache.get(`${msg.author.id}`).send(`You thought this wouldnt work now did you ${msg.author.username}`);
            } catch {
                error_messages("Error in //dm command")
            }
	},
};