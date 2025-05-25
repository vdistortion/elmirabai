import type { CommandContext, Context } from 'grammy';
import createDebug from 'debug';
import { commands } from '../core';

const debug = createDebug('bot:start_command');

export const start = () => async (ctx: CommandContext<Context>) => {
  debug('Triggered "start" command');
  await ctx.reply(`Привет, ${ctx.chat.first_name} ${ctx.chat.last_name}!`, {
    reply_markup: {
      keyboard: [[commands?.online, commands?.offline]],
      resize_keyboard: true,
    },
  });
};
