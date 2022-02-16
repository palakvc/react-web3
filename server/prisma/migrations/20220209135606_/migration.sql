/*
  Warnings:

  - Added the required column `accessToken` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "account_id" TEXT NOT NULL,
    "hash" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "full_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "profileImage" TEXT NOT NULL,
    "coverImage" TEXT NOT NULL,
    "accessToken" TEXT NOT NULL
);
INSERT INTO "new_User" ("account_id", "bio", "coverImage", "email", "full_name", "hash", "id", "profileImage", "username") SELECT "account_id", "bio", "coverImage", "email", "full_name", "hash", "id", "profileImage", "username" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_account_id_key" ON "User"("account_id");
CREATE UNIQUE INDEX "User_hash_key" ON "User"("hash");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
