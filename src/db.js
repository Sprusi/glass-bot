export const STEP = {
  START_DATE: "START_DATE",
  TERM: "TERM",
};

let db;

export const initDb = (database) => {
  db = database;
};

// ----- Пользователь -----

export const saveUser = async (userId, firstName) => {
  await db
    .prepare(
      `INSERT INTO users (id, first_name) VALUES (?, ?)
       ON CONFLICT(id) DO UPDATE SET first_name = excluded.first_name`,
    )
    .bind(userId, firstName ?? null)
    .run();
};

export const getSession = async (userId) => {
  const row = await db
    .prepare("SELECT step, draft_start_date FROM users WHERE id = ?")
    .bind(userId)
    .first();

  if (!row?.step) return null;
  return { step: row.step, startDate: row.draft_start_date };
};

export const setSession = async (userId, { step, startDate }) => {
  await db
    .prepare(
      `INSERT INTO users (id, step, draft_start_date) VALUES (?, ?, ?)
       ON CONFLICT(id) DO UPDATE SET
         step = excluded.step,
         draft_start_date = excluded.draft_start_date`,
    )
    .bind(userId, step ?? null, startDate ?? null)
    .run();
};

export const clearSession = async (userId) => {
  await db
    .prepare(
      "UPDATE users SET step = NULL, draft_start_date = NULL WHERE id = ?",
    )
    .bind(userId)
    .run();
};

// ----- Сроки линз -----

export const createCycle = async (userId, startDate, termDays) => {
  await db.batch([
    db
      .prepare(
        "UPDATE cycles SET is_active = 0 WHERE user_id = ? AND is_active = 1",
      )
      .bind(userId),
    db
      .prepare(
        "INSERT INTO cycles (user_id, start_date, term_days) VALUES (?, ?, ?)",
      )
      .bind(userId, startDate, termDays),
  ]);
};

export const getActiveCycle = async (userId) =>
  db
    .prepare("SELECT * FROM cycles WHERE user_id = ? AND is_active = 1")
    .bind(userId)
    .first();
