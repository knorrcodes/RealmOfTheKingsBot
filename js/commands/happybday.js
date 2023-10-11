export function execute(msg, args) {
    try{
        let targetchannel = msg.guild.channels.cache.get(realmGeneralChat);
        let taggedUser = msg.mentions.users.first();
        targetchannel.send(`Happy Birthday to you... Happy birthday to you... happy birthday dear ${taggedUser}........ happy birthday to you!`, {
            files: ["images/bday.gif"]
        }); 
    }
    catch {
        msg.channel.send("Something went wrong. Did you @ a user?")
    }
}