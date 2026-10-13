import { clearSession } from "../session.js";
import { START_TEXT } from "../texts.js";

export const handleStart = async (ctx) => {
  await clearSession(ctx.from.id);
  await ctx.reply(START_TEXT);
};
