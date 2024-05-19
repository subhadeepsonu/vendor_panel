/*
  Warnings:

  - Added the required column `productid` to the `wishlist` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "wishlist_userid_key";

-- AlterTable
ALTER TABLE "wishlist" ADD COLUMN     "productid" INTEGER NOT NULL;
