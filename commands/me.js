export function execute(msg, args) {
	try {
		const resp = msg.channel.send(`Username: ${msg.author.username}\nID: ${msg.author.id}`);
		return resp
	} catch {
		error_messages("Error in //me command")
	}
}