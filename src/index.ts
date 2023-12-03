import 'dotenv/config';
import { Client, Message } from 'discord.js';


const client = new Client({
    intents: ['Guilds', 'GuildMembers', 'GuildMembers', 'MessageContent', 'GuildMessages'],
})

client.on('ready', (c) =>{
    console.log(`${c.user.username} is online`);
})

//return message
client.on('messageCreate', (msg) =>{
    if(msg.content === 'hello'){
        msg.reply('<:tarbon:802584478652170250>')
    }
    console.log(`${msg.content}`);
})


client.login(process.env.token)