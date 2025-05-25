import type { CommandContext, Context } from 'grammy';
import createDebug from 'debug';

const debug = createDebug('bot:id_command');

export const id = () => async (ctx: CommandContext<Context>) => {
  debug('Triggered "id" command');
  await ctx.reply(`${ctx.chat.id}`);
};
