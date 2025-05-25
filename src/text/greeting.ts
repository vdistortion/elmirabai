import type { Context, Filter } from 'grammy';
import createDebug from 'debug';
import { reply } from '../core';

const debug = createDebug('bot:greeting_text');

const greeting = () => async (ctx: Filter<Context, 'message'>) => {
  debug('Triggered "greeting" text command');
  const userName = `${ctx.message.from.first_name} ${ctx.message.from.last_name}`;
  await reply(ctx, `Hello, ${userName}!`, { messageId: ctx.message.message_id });
};

export { greeting };
