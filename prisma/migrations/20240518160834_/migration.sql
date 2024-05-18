/*
  Warnings:

  - You are about to drop the column `products` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `ordersOrderid` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `desp` on the `rating` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `verified` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `verifytoken` on the `user` table. All the data in the column will be lost.
  - Added the required column `rating` to the `rating` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Brand" DROP CONSTRAINT "Brand_adminname_fkey";

-- AlterTable
ALTER TABLE "orders" DROP COLUMN "products";

-- AlterTable
ALTER TABLE "products" DROP COLUMN "ordersOrderid";

-- AlterTable
ALTER TABLE "rating" DROP COLUMN "desp",
ADD COLUMN     "rating" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "user" DROP COLUMN "password",
DROP COLUMN "verified",
DROP COLUMN "verifytoken",
ALTER COLUMN "phoneno" DROP NOT NULL;

-- CreateTable
CREATE TABLE "OrderProduct" (
    "id" SERIAL NOT NULL,
    "orderid" INTEGER NOT NULL,
    "productid" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "OrderProduct_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "OrderProduct" ADD CONSTRAINT "OrderProduct_productid_fkey" FOREIGN KEY ("productid") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderProduct" ADD CONSTRAINT "OrderProduct_orderid_fkey" FOREIGN KEY ("orderid") REFERENCES "orders"("orderid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Brand" ADD CONSTRAINT "Brand_adminname_fkey" FOREIGN KEY ("adminname") REFERENCES "admin"("username") ON DELETE RESTRICT ON UPDATE CASCADE;
