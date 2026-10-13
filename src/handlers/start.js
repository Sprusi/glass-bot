import { clearSession, saveUser } from "../db.js";
import { START_TEXT } from "../texts.js";

export const handleStart = async (ctx) => {
  await saveUser(ctx.from.id, ctx.from.first_name);
  await clearSession(ctx.from.id);
  await ctx.reply(START_TEXT);
};
