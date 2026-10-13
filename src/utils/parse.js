const MIN_TERM_DAYS = 1;
const MAX_TERM_DAYS = 365;

export const parseTermDays = (text) => {
  if (typeof text !== "string" || !/^\d+$/.test(text.trim())) return null;

  const days = Number(text.trim());
  return days >= MIN_TERM_DAYS && days <= MAX_TERM_DAYS ? days : null;
};
