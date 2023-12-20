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
    if(msg.content === 'aibonime'){
        msg.reply('<:aibologo1:802580099559194625>')
    }
    console.log(`${msg.content}`);
})
client.on('interactionCreate', (interaction) =>{
    if(!interaction.isChatInputCommand()) return;
    if(interaction.commandName === 'hey'){
        interaction.reply('still cannot play');
    }
    if(interaction.commandName === 'ping'){
        interaction.reply('pong!');
    }
    if(interaction.commandName === 'play'){
        interaction.reply('insert music links');
    }

})
   

client.login(process.env.TOKEN)