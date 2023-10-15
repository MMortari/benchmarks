CREATE DATABASE "benchmark";

DROP TABLE IF EXISTS "user";

CREATE TABLE "user" (
  id uuid PRIMARY KEY,
  name varchar(255) not null,
  email varchar(255) not null,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Clean table
DELETE FROM "user";