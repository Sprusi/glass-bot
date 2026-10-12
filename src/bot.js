import { ASK_START_DATE_TEXT, START_TEXT } from "./texts.js";

export function registerHandlers(bot) {
  bot.command("start", async (ctx) => {
    await ctx.reply(START_TEXT);
  });

  bot.command("new", async (ctx) => {
    await ctx.reply(ASK_START_DATE_TEXT);
  });

  bot.on("message", async (ctx) => {
    console.log("text", ctx.message.text);
  });

  bot.catch((err, ctx) => {
    console.error("Error while handling update", ctx.update.update_id, err);
  });
}
