const https = require('https');
const fetch = require('cross-fetch');

module.exports = {
    name: 'medal',
    description: 'medal.tv latest clip',
	execute(msg, args) {

        const map1 = new Map();
        
        map1.set('304745620411777024','45245258' );
        map1.set('328204241657397249', '41045699')
        console.log(map1)

        aaronId = '41045699';
        darrinId = '45245258';
        jonId = '46512626';

        //me
        if (msg.author.id == '304745620411777024'){
            url = 'https://developers.medal.tv/v1/latest?userId=45245258&limit=1'
        }
        //aaron
        else if (msg.author.id == '328204241657397249') {
            url = 'https://developers.medal.tv/v1/latest?userId=41045699&limit=1'
        }

        auth = 'priv_7If9072CxwaDRD7HpmKjWJpx4hbBYRFH';
        fetch(
            url,
            {
                headers:{
                    'Authorization': auth
                }
            }
            )
            .then(response => response.text())
            .then(data => JSON.parse(data))
            .then(d => msg.channel.send(d['contentObjects'][0]['directClipUrl']));
	},
};