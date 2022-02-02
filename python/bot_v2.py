import discord

token = 'NzU1MTQzNjkyMzQzMzEyNDQ0.X1_AXg.XkehZwxsx1NOqvhjC6SKdSQSGn4'

class MyClient(discord.Client):
    async def on_ready(self):
        print('Logged on as {0}!'.format(self.user))

    async def on_message(self, message):
        print('Message from {0.author}: {0.content}'.format(message))
	client.send_message(client.get_channel('451903401979281412'), 'Hello World')

client = MyClient()
client.run(token)
