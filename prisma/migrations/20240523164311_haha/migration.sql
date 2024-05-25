/*
  Warnings:

  - A unique constraint covering the columns `[adminname]` on the table `Brand` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Brand_adminname_key" ON "Brand"("adminname");
