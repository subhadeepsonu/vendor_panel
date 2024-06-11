/*
  Warnings:

  - You are about to drop the column `adminName` on the `Brand` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Brand_adminName_key";

-- AlterTable
ALTER TABLE "Brand" DROP COLUMN "adminName";
