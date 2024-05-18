/*
  Warnings:

  - The primary key for the `admin` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `password` on the `admin` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `admin` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `admin` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Brand" DROP CONSTRAINT "Brand_adminname_fkey";

-- AlterTable
ALTER TABLE "admin" DROP CONSTRAINT "admin_pkey",
DROP COLUMN "password",
ADD COLUMN     "email" TEXT NOT NULL,
ALTER COLUMN "phoneno" DROP NOT NULL,
ADD CONSTRAINT "admin_pkey" PRIMARY KEY ("email");

-- CreateIndex
CREATE UNIQUE INDEX "admin_email_key" ON "admin"("email");

-- AddForeignKey
ALTER TABLE "Brand" ADD CONSTRAINT "Brand_adminname_fkey" FOREIGN KEY ("adminname") REFERENCES "admin"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
