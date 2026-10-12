// Чистые функции для дат: ничего не знают ни про Telegram, ни про базу.
// В базе дата хранится строкой "YYYY-MM-DD", пользователю показываем "ДД.ММ.ГГГГ".

export const DEFAULT_TIMEZONE = "Europe/Moscow";

/** Сегодняшняя дата в часовом поясе пользователя → "YYYY-MM-DD" */
export function getToday(timezone = DEFAULT_TIMEZONE) {
  // TODO: реализовать
  return null;
}

/** Дата + N дней → "YYYY-MM-DD" (N может быть отрицательным: -1 = вчера) */
export function addDays(date, days) {
  // TODO: реализовать
  return null;
}

/**
 * Разбор даты от пользователя: "01.10.2026" или "01/10/2026" → "2026-10-01".
 * Неверный формат или несуществующая дата (31.02) → null
 */
export function parseUserDate(text) {
  // TODO: реализовать
  return null;
}

/** "2026-10-01" → "01.10.2026" */
export function formatForUser(date) {
  // TODO: реализовать
  return date;
}

/** Дата позже сегодняшней в часовом поясе пользователя? */
export function isFuture(date, timezone = DEFAULT_TIMEZONE) {
  // TODO: реализовать
  return false;
}
