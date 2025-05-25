import type { Context, Filter } from 'grammy';
import createDebug from 'debug';
import { GROUP_ID } from '../env';

const debug = createDebug('bot:file_text');

export const file = () => async (ctx: Filter<Context, 'message'>) => {
  debug('Triggered "file" text command');
  await ctx.api.forwardMessage(GROUP_ID!, ctx.chat.id, ctx.message.message_id);
  await ctx.reply('Файл отправлен.', {
    reply_parameters: { message_id: ctx.message.message_id },
  });
};
