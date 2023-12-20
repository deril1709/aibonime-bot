import { REST, Routes } from 'discord.js';
require('dotenv').config();

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
  {
    name: 'hey',
    description: 'menyapa',
  },
  {
    name: 'play',
    description: 'play music',
  }
];

const rest = new REST({ version: '10'}).setToken(process.env.TOKEN ?? '');

(async () => {
  try {
    console.log('Registering')
    await rest.put(
      Routes.applicationGuildCommands(process.env.CLIENT_ID ?? '', process.env.GUILD_ID ?? ''),{body : commands ?? ''}
    )
    console.log('Successfully registered')
  } catch (error) {
    console.log(`error: ${error}`);
  }
})();