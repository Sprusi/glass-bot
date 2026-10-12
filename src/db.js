// Всё про базу данных: создание таблиц и функции-запросы. Ничего не знает про Telegram.
// Пока заглушки — базу (SQLite + better-sqlite3) подключим позже.

// Шаги диалога: чего ждём от пользователя
export const STEP = {
  WAIT_START_DATE: "WAIT_START_DATE",
  WAIT_TERM_DAYS: "WAIT_TERM_DAYS",
};

/** Создать пользователя или обновить его имя */
export function saveUser(userId, firstName) {
  // TODO: INSERT ... ON CONFLICT DO UPDATE в users
}

/** Пользователь по Telegram id → { id, first_name, step, draft_start_date } или null */
export function getUser(userId) {
  // TODO: SELECT из users
  return null;
}

/** Запомнить шаг диалога и дату из шага 1 (null — сбросить) */
export function setStep(userId, step, draftStartDate = null) {
  // TODO: UPDATE users
}

/** Новый срок: старый is_active = 0, новый добавить — в одной транзакции */
export function createCycle(userId, startDate, termDays) {
  // TODO: транзакция по cycles
}

/** Текущий активный срок пользователя или null */
export function getActiveCycle(userId) {
  // TODO: SELECT из cycles WHERE is_active = 1
  return null;
}
