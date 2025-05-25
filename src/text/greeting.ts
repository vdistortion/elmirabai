import type { Context, Filter } from 'grammy';
import createDebug from 'debug';
import { GROUP_ID } from '../env';

const debug = createDebug('bot:greeting_text');

export const greeting = () => async (ctx: Filter<Context, 'message:text'>) => {
  debug('Triggered "greeting" text command');
  await ctx.api.forwardMessage(GROUP_ID!, ctx.chatId, ctx.msgId);
  await ctx.reply('Сообщение отправлено.', {
    reply_parameters: { message_id: ctx.msgId },
  });
};
