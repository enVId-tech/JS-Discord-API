const { Client, GatewayIntentBits } = require('discord.js');
const dotenv = require('dotenv');

dotenv.config({ path: './server/credentials.env' });

const TOKEN = process.env.TOKEN;
const CHANNEL_ID = process.env.GROUPID;

console.log(GatewayIntentBits);

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });

client.once('ready', async () => {
    console.log('Bot is ready!');

    const channel = await client.channels.fetch(CHANNEL_ID);
    const pinnedMessages = await channel.messages.fetchPinned();

    pinnedMessages.forEach((message) => {
        console.log(`Pinned message ID: ${message.id}, Content: ${message.content}`);
    });
});

client.login(TOKEN);