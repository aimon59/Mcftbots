const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: process.env.MC_HOST,
  port: Number(process.env.MC_PORT) || 25565,
  username: process.env.MC_USER || 'AIBot',
  version: process.env.MC_VERSION || false
})

bot.once('spawn', () => bot.chat('Hello! I am online.'))
bot.on('chat', (user, msg) => {
  if (user === bot.username) return
  bot.chat('You said: ' + msg)
})
bot.on('kicked', console.log)
bot.on('error', console.log)
bot.on('end', () => process.exit(1)) // lets Railway restart it
