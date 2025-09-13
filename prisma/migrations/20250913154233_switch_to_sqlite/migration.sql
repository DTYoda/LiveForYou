-- CreateTable
CREATE TABLE "posts" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" TEXT,
    "post_title" TEXT,
    "date_time" DATETIME,
    "post_body" TEXT,
    "likes_count" INTEGER DEFAULT 0,
    "dislikes_count" INTEGER DEFAULT 0,
    "favorites_count" INTEGER DEFAULT 0
);

-- CreateTable
CREATE TABLE "relationships" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "first_id_joined" TEXT,
    "second_id_joined" TEXT
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT,
    "email" TEXT,
    "username" TEXT,
    "password" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
