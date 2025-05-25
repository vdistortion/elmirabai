import type { Context, Filter } from 'grammy';
import createDebug from 'debug';
import { forwardMessageByGroupId } from '../utils';

const debug = createDebug('bot:greeting_text');

export const greeting = () => async (ctx: Filter<Context, 'message:text'>) => {
  debug('Triggered "greeting" text command');
  let message = 'Сообщение отправлено';
  try {
    await forwardMessageByGroupId(ctx, ctx.chatId, ctx.msgId);
  } catch (err: any) {
    message = `Сообщение не отправлено, возможно бот не состоит в группе.\n\nError: ${err.message}`;
  }
  await ctx.reply(message, {
    reply_parameters: { message_id: ctx.msgId },
  });
};
