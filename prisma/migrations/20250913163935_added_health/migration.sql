/*
  Warnings:

  - You are about to drop the column `dislikes_count` on the `posts` table. All the data in the column will be lost.
  - You are about to drop the column `favorites_count` on the `posts` table. All the data in the column will be lost.
  - You are about to alter the column `user_id` on the `posts` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `first_id_joined` on the `relationships` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `second_id_joined` on the `relationships` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- CreateTable
CREATE TABLE "healthData" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_id" INTEGER,
    "steps" INTEGER,
    "stretch" INTEGER,
    "exercise" INTEGER,
    "water" INTEGER,
    "rating" INTEGER,
    "comment" TEXT
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_posts" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" INTEGER,
    "health_id" INTEGER,
    "post_title" TEXT,
    "date_time" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "post_body" TEXT,
    "likes_count" INTEGER DEFAULT 0
);
INSERT INTO "new_posts" ("created_at", "date_time", "id", "likes_count", "post_body", "post_title", "user_id") SELECT "created_at", "date_time", "id", "likes_count", "post_body", "post_title", "user_id" FROM "posts";
DROP TABLE "posts";
ALTER TABLE "new_posts" RENAME TO "posts";
CREATE TABLE "new_relationships" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "first_id_joined" INTEGER,
    "second_id_joined" INTEGER
);
INSERT INTO "new_relationships" ("created_at", "first_id_joined", "id", "second_id_joined") SELECT "created_at", "first_id_joined", "id", "second_id_joined" FROM "relationships";
DROP TABLE "relationships";
ALTER TABLE "new_relationships" RENAME TO "relationships";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
