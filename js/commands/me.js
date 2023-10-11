export function execute(msg, args) {
	try {
		msg.channel.send(`Username: ${msg.author.username}\nID: ${msg.author.id}`);
	} catch {
		error_messages("Error in //me command")
	}
}