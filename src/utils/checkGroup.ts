import type { Context } from 'grammy';
import { GROUP_ID } from '../env';

export const forwardMessageByGroupId = async (
  ctx: Context,
  chatId: string | number,
  messageId: string | number,
) => {
  try {
    await ctx.api.getChat(GROUP_ID!);
    await ctx.api.forwardMessage(GROUP_ID!, chatId, Number(messageId));
  } catch (err) {
    return Promise.reject(err);
  }
};
