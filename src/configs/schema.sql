-- Users Table
CREATE TABLE users (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  username      VARCHAR(255) NOT NULL,
  telegram_id   VARCHAR(255),
  discord_id    VARCHAR(255),
  created_at    TIMESTAMP DEFAULT NOW(),
  updated_at    TIMESTAMP DEFAULT NOW(),
  email         VARCHAR(255)
);

-- Skills Table
CREATE TABLE skills (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name          VARCHAR(255) NOT NULL,
  desciption    TEXT,
  created_by    UUID REFERENCES users(id),
  is_public     BOOLEAN DEFAULT FALSE,
  created_at    TIMESTAMP DEFAULT NOW(),
  updated_at    TIMESTAMP DEFAULT NOW()
);

-- Activities Table
CREATE TABLE activities (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name          VARCHAR(255) NOT NULL,
  description   TEXT NOT NULL,
  time_spent    INTERVAL NOT NULL,
  multiplier    NUMERIC(2,1) DEFAULT 1.0, -- Множитель от 0.5 до 1.5 представлен как значение numeric с точностью до 2 цифр и масштабом 1 после запятой
  user_id       UUID REFERENCES users(id),
  skill_id      UUID REFERENCES skills(id),
  created_at    TIMESTAMP DEFAULT NOW(),
  updated_at    TIMESTAMP DEFAULT NOW()
);

-- Join Table for Activity and Skills (many-to-many relationship)
CREATE TABLE activity_skills (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  activity_id   UUID REFERENCES activities(id),
  skill_id      UUID REFERENCES skills(id)
);

-- Multipliers Audit Log Table
CREATE TABLE multipliers (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  activity_id   UUID REFERENCES activities(id),
  previous_mult FLOAT NOT NULL,
  new_mult      FLOAT NOT NULL,
  adjusted_at   TIMESTAMP DEFAULT NOW()
);

--Admin skills audit
CREATE TABLE admin_reviews (
    id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    skill_id    UUID REFERENCES skills(id) ON DELETE CASCADE,
    reviewed_by UUID REFERENCES users(id), -- Администратор, который проверил навык
    is_approved BOOLEAN DEFAULT FALSE,
    created_at  TIMESTAMP DEFAULT NOW()
);

--DROP TABLES
DROP TABLE users CASCADE;
DROP TABLE skills CASCADE;
DROP TABLE activities CASCADE;
DROP TABLE activity_skills CASCADE;
DROP TABLE multipliers CASCADE;
DROP TABLE admin_reviews CASCADE;
