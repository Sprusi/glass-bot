// Команды и кнопки: «что пришло → что ответить»
import { ASK_START_DATE_TEXT, START_TEXT } from "./texts.js";

export function registerHandlers(bot) {
  bot.command("start", async (ctx) => {
    // TODO: saveUser, setStep(null)
    await ctx.reply(START_TEXT);
  });

  bot.command("new", async (ctx) => {
    // TODO: setStep(null), кнопки «Сегодня» · «Вчера» · «Другая дата»
    await ctx.reply(ASK_START_DATE_TEXT);
  });

  // Нажатия на inline-кнопки
  bot.on("callback_query", async (ctx) => {
    await ctx.answerCallbackQuery();
    // TODO: кнопки даты (шаг 1) и срока (шаг 2)
  });

  // Обычный текст: ввод даты или своего срока
  bot.on("message", async (ctx) => {
    console.log("text", ctx.message.text);
    // TODO: getUser → по user.step разобрать дату или число дней
  });

  bot.catch((err, ctx) => {
    console.error("Error while handling update", ctx.update.update_id, err);
  });
}
