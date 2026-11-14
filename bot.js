const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'am01.hostlixo.bond',
  port: 25374,
  username: 'AIBot'
})

bot.once('spawn', () => bot.chat('Hello! I am online.'))
bot.on('chat', (user, msg) => {
  if (user === bot.username) return
  bot.chat('You said: ' + msg)
})
bot.on('kicked', console.log)
bot.on('error', console.log)
bot.on('end', () => process.exit(1))
