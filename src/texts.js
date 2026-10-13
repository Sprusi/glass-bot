export const START_TEXT = `Привет! 👋 Я напоминаю, когда пора менять контактные линзы.

Как это работает:
• ты указываешь, когда начал(а) носить линзы, и их срок;
• накануне и в день замены я пришлю сообщение;
• после замены нажимаешь «Заменил(а)» — и я начинаю считать заново.

Команды:
/new — новая пара линз
/status — сколько осталось
/time — время напоминаний (по умолчанию 09:00)
/tz — часовой пояс (по умолчанию Москва)`;

// Текст вне диалога
export const NO_DIALOG_TEXT = "Чтобы задать срок, напиши /new";

// Подписи кнопок

// /new, шаг 1 — дата начала
export const ASK_START_DATE_TEXT = "Когда начал(а) носить эту пару?";
export const ASK_START_DATE_INPUT_TEXT = "Напиши дату в формате ДД.ММ.ГГГГ";
export const INVALID_DATE_TEXT =
  "Не получилось разобрать дату, пример: 01.10.2026";
export const FUTURE_DATE_TEXT =
  "Дата начала не может быть в будущем. Напиши сегодняшнюю или более раннюю дату";

export const BUTTONS_DATE = {
  today: "Сегодня",
  yesterday: "Вчера",
  customDate: "Другая дата",
};
export const BUTTONS_TERM = {
  twoWeeks: "2 недели",
  month: "Месяц",
  threeMonths: "3 месяца",
  customTerm: "Свой срок",
};

// /new, шаг 2 — срок
export const ASK_TERM_TEXT = "Какой у линз срок замены?";
export const ASK_TERM_INPUT_TEXT = "Напиши количество дней (1–365)";
export const INVALID_TERM_TEXT = "Нужно число от 1 до 365";

// /new, шаг 3 — итог
export const doneText = (startDate, termDays, replaceDate) =>
  `Готово! Начало ${startDate}, срок ${termDays} дн., замена ${replaceDate}. Напомню в 09:00`;
