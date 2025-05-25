import type { Context, Filter } from 'grammy';
import createDebug from 'debug';
import { forwardMessageByGroupId } from '../utils';

const debug = createDebug('bot:file_text');

export const file = () => async (ctx: Filter<Context, 'message:file'>) => {
  debug('Triggered "file" text command');
  let message = 'Файл отправлен';
  try {
    await forwardMessageByGroupId(ctx, ctx.chatId, ctx.msgId);
  } catch (err: any) {
    message = `Файл не отправлен, возможно бот не состоит в группе.\n\nError: ${err.message}`;
  }
  await ctx.reply(message, {
    reply_parameters: { message_id: ctx.msgId },
  });
};
