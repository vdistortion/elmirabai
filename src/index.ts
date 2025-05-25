import { Bot, GrammyError, HttpError, webhookCallback } from 'grammy';
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { commands, development, production } from './core';
import { start, id } from './commands';
import { file, greeting } from './text';
import { GROUP_ID, NODE_ENV, TELEGRAM_BOT_TOKEN } from './env';
import { getPathToAssets, replaceAll } from './utils';

export const bot = new Bot(TELEGRAM_BOT_TOKEN!);

bot.command('start', start());
bot.command('id', id());

bot.hears(commands.online, async (ctx) => {
  await ctx.replyWithPhoto(getPathToAssets(`images/temp.webp`), {
    caption: 'Описание первого курса...\n\nОписание второго курса...',
    reply_markup: {
      inline_keyboard: [
        [
          { text: 'Оплатить онлайн-курс 1', callback_data: 'course_1' },
          { text: 'Оплатить онлайн-курс 2', callback_data: 'course_2' },
        ],
      ],
    },
  });
});

bot.hears(commands.offline, async (ctx) => {
  await ctx.reply(
    replaceAll(`Описание кнопки ${commands.offline}
Оффлайн-занятие проходят в самом лучшем городе по самой лучшей цене!
Стоимость 4000₽ за 3 занятия.
Покупка возможна по абонементу ||АБОНЕМЕНТ||
+ 500₽ оплата за зал
Если остались вопросы, напишите в чат
Если хотите приобрести, нажмите на кнопку Купить`),
    {
      parse_mode: 'MarkdownV2',
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: 'Купить оффлайн-занятие',
              callback_data: `offline_buy|${ctx.chat.id}|${ctx.message?.message_id}`,
            },
          ],
        ],
      },
    },
  );
});

bot.callbackQuery('course_1', async (ctx) => {
  await ctx.reply(
    replaceAll(`Реквизиты первого курса:
Карта: ||1234 5678 9012 3456||
Если остались вопросы, напишите в чат
Или пришлите чек об оплате`),
    {
      parse_mode: 'MarkdownV2',
    },
  );
  await ctx.answerCallbackQuery();
});

bot.callbackQuery('course_2', async (ctx) => {
  await ctx.reply(
    replaceAll(`Реквизиты второго курса:
СБП: ||+7 \\(123\\) 456-78-90||
Если остались вопросы, напишите в чат
Или пришлите чек об оплате`),
    {
      parse_mode: 'MarkdownV2',
    },
  );
  await ctx.answerCallbackQuery();
});

bot.callbackQuery(/^offline_buy\|/, async (ctx) => {
  const [_, chatId, messageId] = ctx.callbackQuery.data.split('|');
  await ctx.api.forwardMessage(GROUP_ID!, chatId, Number(messageId));
  await ctx.reply('Заявка отправлена', {
    reply_parameters: { message_id: Number(messageId) },
  });
  await ctx.answerCallbackQuery();
});

bot.on('message:file', file());
bot.on('message:text', greeting());

bot.catch((err) => {
  const ctx = err.ctx;
  console.error(`Error while handling update ${ctx.update.update_id}:`);
  const e = err.error;
  if (e instanceof GrammyError) {
    console.error('Error in request:', e.description);
  } else if (e instanceof HttpError) {
    console.error('Could not contact Telegram:', e);
  } else {
    console.error('Unknown error:', e);
  }
});

//prod mode (Vercel)
export const startVercel = async (req: VercelRequest, res: VercelResponse) => {
  await production();
  webhookCallback(bot, 'https')(req, res);
};

//dev mode
NODE_ENV !== 'production' && development(bot);
