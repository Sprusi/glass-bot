import {
  handleNewDialogButton,
  handleNewDialogText,
  startNewDialog,
} from "./handlers/new.js";
import { handleStart } from "./handlers/start.js";
import { getSession, STEP } from "./db.js";
import { NO_DIALOG_TEXT } from "./texts.js";
import { removeKeyboard } from "./utils/telegram.js";

export function registerHandlers(bot) {
  bot.command("start", handleStart);
  bot.command("new", startNewDialog);

  bot.on("callback_query", async (ctx) => {
    await ctx.answerCallbackQuery();
    await removeKeyboard(ctx);

    const [type, value] = (ctx.callbackQuery.data ?? "").split(":");
    const session = await getSession(ctx.from.id);

    if (type === "date" || type === "term") {
      return handleNewDialogButton(ctx, type, value, session);
    }
  });

  bot.on("message", async (ctx) => {
    const text = ctx.message.text;
    const session = await getSession(ctx.from.id);

    if (session?.step === STEP.START_DATE || session?.step === STEP.TERM) {
      return handleNewDialogText(ctx, text, session);
    }

    return ctx.reply(NO_DIALOG_TEXT);
  });

  bot.catch((err, ctx) => {
    console.error("Error while handling update", ctx.update.update_id, err);
  });
}
