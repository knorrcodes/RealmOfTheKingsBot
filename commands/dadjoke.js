export function execute(msg, args) {
    try{
        targetChannel = msg.guild.channels.cache.get(realmGeneralChat)
        https.get('https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/jokes', (response) => {
            let data = '';
            response.on('data', (chunk) => {
                data += chunk;
            });

            response.on('end', (error) => {
                const obj = JSON.parse(data)
                targetChannel.send(obj.setup);
                sleep(3000).then(() => {
                    targetChannel.send(obj.punchline);
                });
                
            });
        })
        .on('error', (error) => {
            console.log(error);
        });
    }
    catch (err) {
        console.log(err);
    }
}