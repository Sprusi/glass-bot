/** Шаги диалога: чего ждём от пользователя */
export const STEP = {
  START_DATE: "START_DATE",
  TERM: "TERM",
};

const sessions = new Map(); // ключ — id пользователя, значение — { step, startDate }

export const getSession = async (userId) => sessions.get(userId) ?? null;

export const setSession = async (userId, session) => {
  sessions.set(userId, session);
};

export const clearSession = async (userId) => {
  sessions.delete(userId);
};
