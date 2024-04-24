/*
  Warnings:

  - You are about to drop the column `brand` on the `products` table. All the data in the column will be lost.
  - Added the required column `brandname` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category` to the `products` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `productype` on the `products` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "category" AS ENUM ('biryani', 'curry', 'breads', 'chinese');

-- CreateEnum
CREATE TYPE "productypes" AS ENUM ('single', 'variable');

-- CreateEnum
CREATE TYPE "orderStatus" AS ENUM ('cooking', 'ready', 'delivered');

-- AlterTable
ALTER TABLE "products" DROP COLUMN "brand",
ADD COLUMN     "brandname" TEXT NOT NULL,
ADD COLUMN     "category" "category" NOT NULL,
ALTER COLUMN "stock" SET DEFAULT 0,
ALTER COLUMN "imgurl" SET DATA TYPE TEXT,
DROP COLUMN "productype",
ADD COLUMN     "productype" "productypes" NOT NULL;

-- CreateTable
CREATE TABLE "Brand" (
    "name" TEXT NOT NULL,
    "isopen" BOOLEAN NOT NULL DEFAULT false,
    "imgurl" TEXT NOT NULL,
    "isfeatured" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Brand_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "orders" (
    "orderid" SERIAL NOT NULL,
    "orderStatus" "orderStatus" NOT NULL,
    "totalamount" INTEGER NOT NULL,
    "orderedat" TIMESTAMP(3) NOT NULL,
    "address" TEXT NOT NULL,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("orderid")
);

-- CreateTable
CREATE TABLE "Banner" (
    "id" SERIAL NOT NULL,
    "imgurl" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL,

    CONSTRAINT "Banner_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_brandname_fkey" FOREIGN KEY ("brandname") REFERENCES "Brand"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
