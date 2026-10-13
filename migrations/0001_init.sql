-- Пользователи + состояние диалога
CREATE TABLE users (
  id INTEGER PRIMARY KEY,                        -- Telegram id
  first_name TEXT,
  timezone TEXT NOT NULL DEFAULT 'Europe/Moscow',
  remind_time TEXT NOT NULL DEFAULT '09:00',
  step TEXT,                                    
  draft_start_date TEXT,                         
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Сроки линз: старые остаются как история, активный — один
CREATE TABLE cycles (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL REFERENCES users(id),
  start_date TEXT NOT NULL,                      
  term_days INTEGER NOT NULL CHECK (term_days BETWEEN 1 AND 365),
  is_active INTEGER NOT NULL DEFAULT 1,          -- 1 = текущий, 0 = старый
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Правило: у пользователя не больше одного активного срока
CREATE UNIQUE INDEX cycles_one_active_per_user ON cycles(user_id) WHERE is_active = 1;
