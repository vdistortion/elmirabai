import type { Context, Filter } from 'grammy';
import createDebug from 'debug';
import { GROUP_ID } from '../env';

const debug = createDebug('bot:file_text');

export const file = () => async (ctx: Filter<Context, 'message:file'>) => {
  debug('Triggered "file" text command');
  await ctx.api.forwardMessage(GROUP_ID!, ctx.chatId, ctx.msgId);
  await ctx.reply('Файл отправлен.', {
    reply_parameters: { message_id: ctx.msgId },
  });
};
