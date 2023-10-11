export function execute(msg, args) {
    const guild = client.guilds.fetch('304745620411777024')
    const members = guild.members.fetch() // returns Collection
    console.log(members)
}
