// Общие действия с Telegram, нужные в разных диалогах

export const removeKeyboard = async (ctx) => {
  const message = ctx.callbackQuery.message;
  if (!message) return;

  await ctx.api
    .editMessageReplyMarkup({
      chat_id: message.chat.id,
      message_id: message.message_id,
    })
    .catch(() => {});
};
