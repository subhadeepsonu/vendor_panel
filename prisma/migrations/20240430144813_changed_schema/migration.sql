/*
  Warnings:

  - You are about to drop the `_ordersToproducts` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ordersToproducts" DROP CONSTRAINT "_ordersToproducts_A_fkey";

-- DropForeignKey
ALTER TABLE "_ordersToproducts" DROP CONSTRAINT "_ordersToproducts_B_fkey";

-- AlterTable
ALTER TABLE "orders" ADD COLUMN     "products" TEXT[];

-- DropTable
DROP TABLE "_ordersToproducts";
