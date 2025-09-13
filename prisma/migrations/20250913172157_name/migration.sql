/*
  Warnings:

  - You are about to drop the `HealthData` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "HealthData";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "healthdata" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_id" INTEGER,
    "steps" INTEGER,
    "stretch" INTEGER,
    "exercise" INTEGER,
    "water" INTEGER,
    "rating" INTEGER,
    "comment" TEXT
);
