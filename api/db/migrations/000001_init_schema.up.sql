CREATE TYPE "feedback_status" AS ENUM (
  'open',
  'under_consideration',
  'planned',
  'in_progress',
  'shipped',
  'rejected'
);

CREATE TYPE "feedback_category" AS ENUM (
  'bug',
  'question',
  'idea',
  'enhancement',
  'other'
);

CREATE TABLE "users" (
  "id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "username" varchar UNIQUE,
  "full_name" varchar UNIQUE,
  "email" varchar UNIQUE NOT NULL,
  "profile_picture" varchar,
  "created_at" timestamp DEFAULT (now()),
  "updated_at" timestamp DEFAULT (now())
);

CREATE TABLE "external_users" (
  "id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "full_name" varchar,
  "email" varchar UNIQUE,
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE "projects" (
  "id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "user_id" integer NOT NULL,
  "name" varchar NOT NULL,
  "description" varchar,
  "created_at" timestamp DEFAULT (now()),
  "updated_at" timestamp DEFAULT (now())
);

CREATE TABLE "feedbacks" (
  "id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "project_id" integer NOT NULL,
  "user_id" integer,
  "external_user_id" integer,
  "title" varchar NOT NULL,
  "description" varchar NOT NULL,
  "category" feedback_category NOT NULL,
  "status" feedback_status DEFAULT 'open',
  "votes" integer DEFAULT 0,
  "created_at" timestamp DEFAULT (now()),
  "updated_at" timestamp DEFAULT (now())
);

CREATE TABLE "comments" (
  "id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "feedback_id" integer NOT NULL,
  "user_id" integer NOT NULL,
  "text" varchar NOT NULL,
  "created_at" timestamp DEFAULT (now()),
  "updated_at" timestamp DEFAULT (now())
);

CREATE UNIQUE INDEX ON "users" ("full_name", "email");

CREATE UNIQUE INDEX ON "external_users" ("full_name", "email");

CREATE UNIQUE INDEX ON "projects" ("user_id", "name");

CREATE UNIQUE INDEX ON "feedbacks" ("project_id", "user_id");

CREATE UNIQUE INDEX ON "feedbacks" ("external_user_id", "title");

CREATE UNIQUE INDEX ON "comments" ("feedback_id", "user_id");

ALTER TABLE "projects" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE NO ACTION;

ALTER TABLE "feedbacks" ADD FOREIGN KEY ("project_id") REFERENCES "projects" ("id") ON DELETE CASCADE ON UPDATE NO ACTION;

ALTER TABLE "feedbacks" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE NO ACTION;

ALTER TABLE "comments" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE NO ACTION;

ALTER TABLE "comments" ADD FOREIGN KEY ("feedback_id") REFERENCES "feedbacks" ("id") ON DELETE CASCADE ON UPDATE NO ACTION;

ALTER TABLE "feedbacks" ADD FOREIGN KEY ("external_user_id") REFERENCES "external_users" ("id") ON DELETE CASCADE ON UPDATE NO ACTION;
