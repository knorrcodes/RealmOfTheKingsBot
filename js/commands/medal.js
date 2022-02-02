const https = require('https');
const fetch = require('cross-fetch');

module.exports = {
    name: 'medal',
    description: 'medal.tv latest clip',
    url: 'https://developers.medal.tv/v1/latest?userId=45245258&limit=1',
    auth: 'priv_7If9072CxwaDRD7HpmKjWJpx4hbBYRFH',
	execute(msg, args) {
        fetch(
            this.url,
            {
                headers:{
                    'Authorization': this.auth
                }
            }
            )
            .then(response => response.text())
            .then(data => JSON.parse(data))
            .then(d => msg.channel.send(d['contentObjects'][0]['directClipUrl']));
	},
};