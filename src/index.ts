import { Bot, webhookCallback } from 'grammy';
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { development, production } from './core';
import { id } from './commands';
import { greeting } from './text';

const { TELEGRAM_BOT_TOKEN, NODE_ENV } = process.env;
export const bot = new Bot(TELEGRAM_BOT_TOKEN!);

bot.command('id', id());
bot.on('message:text', greeting());

//prod mode (Vercel)
export const startVercel = async (req: VercelRequest, res: VercelResponse) => {
  await production();
  webhookCallback(bot, 'https')(req, res);
};

//dev mode
NODE_ENV !== 'production' && development(bot);
