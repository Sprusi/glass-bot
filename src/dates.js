const DEFAULT_TIMEZONE = "Europe/Moscow";
const MS_PER_DAY = 24 * 60 * 60 * 1000;

export const getToday = (timezone = DEFAULT_TIMEZONE) =>
  new Intl.DateTimeFormat("en-CA", {
    timeZone: timezone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());

export const addDays = (date, countDays) => {
  const result = new Date(date + "T00:00:00Z");
  result.setUTCDate(result.getUTCDate() + countDays);
  return result.toISOString().slice(0, 10);
};

export const daysBetween = (from, to) =>
  Math.round((Date.parse(to) - Date.parse(from)) / MS_PER_DAY);

export const parseUserDate = (text) => {
  if (typeof text !== "string") return null;

  const match = text.trim().match(/^(\d{2})[./](\d{2})[./](\d{4})$/);
  if (!match) return null;

  const [, day, month, year] = match;
  const date = `${year}-${month}-${day}`;

  if (Number.isNaN(Date.parse(date))) return null;

  return addDays(date, 0) === date ? date : null;
};

export const formatForUser = (date) => date.split("-").reverse().join(".");

export const isFuture = (date, timezone = DEFAULT_TIMEZONE) =>
  date > getToday(timezone);
