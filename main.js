import { Telegraf, Markup } from 'telegraf'

const token = '6612088103:AAHw800w4JqGI-1vL8zG-ML5xweW8XkOfQ8'
const webAppUrl = 'https://b12veganshop.com/'

const bot = new Telegraf(token)

bot.command('start', (ctx) => {
  ctx.reply(
    'Hi! Please tap the button below to order your perfect lunch!',
    Markup.keyboard([
      Markup.button.webApp(
        'Order Food',
        webAppUrl
      )
    ])
  )
})

bot.launch()