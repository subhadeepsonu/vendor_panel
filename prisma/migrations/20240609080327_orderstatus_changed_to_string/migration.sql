/*
  Warnings:

  - The `orderStatus` column on the `Order` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Order" DROP COLUMN "orderStatus",
ADD COLUMN     "orderStatus" TEXT NOT NULL DEFAULT 'COOKING';

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "role" SET DEFAULT 'user';
