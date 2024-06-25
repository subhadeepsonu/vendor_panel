-- CreateEnum
CREATE TYPE "orderType" AS ENUM ('DineIn', 'TakeAway');

-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "type" "orderType" NOT NULL DEFAULT 'DineIn';
