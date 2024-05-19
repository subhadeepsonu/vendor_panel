/*
  Warnings:

  - You are about to drop the column `prductid` on the `rating` table. All the data in the column will be lost.
  - Added the required column `productid` to the `rating` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "rating" DROP CONSTRAINT "rating_prductid_fkey";

-- AlterTable
ALTER TABLE "rating" DROP COLUMN "prductid",
ADD COLUMN     "productid" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "rating" ADD CONSTRAINT "rating_productid_fkey" FOREIGN KEY ("productid") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
