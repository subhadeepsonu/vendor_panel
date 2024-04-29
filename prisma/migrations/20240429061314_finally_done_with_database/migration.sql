/*
  Warnings:

  - A unique constraint covering the columns `[feedbackid]` on the table `orders` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `user` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `feedbackid` to the `orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `orders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Brand" ADD COLUMN     "adminname" TEXT NOT NULL DEFAULT 'ha';

-- AlterTable
ALTER TABLE "orders" ADD COLUMN     "feedbackid" INTEGER NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL,
ALTER COLUMN "orderedat" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "products" ADD COLUMN     "description" TEXT,
ADD COLUMN     "nonveg" BOOLEAN NOT NULL DEFAULT true,
ALTER COLUMN "name" DROP DEFAULT;

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "verified" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "verifytoken" TEXT;

-- CreateTable
CREATE TABLE "productonwishlist" (
    "id" SERIAL NOT NULL,
    "userid" INTEGER NOT NULL,
    "productid" INTEGER NOT NULL,

    CONSTRAINT "productonwishlist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "feedback" (
    "id" SERIAL NOT NULL,
    "review" TEXT NOT NULL,
    "userid" INTEGER NOT NULL,
    "rating" INTEGER NOT NULL,
    "orderid" INTEGER NOT NULL,

    CONSTRAINT "feedback_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "admin" (
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phoneno" TEXT NOT NULL,

    CONSTRAINT "admin_pkey" PRIMARY KEY ("username")
);

-- CreateTable
CREATE TABLE "wishlist" (
    "id" SERIAL NOT NULL,
    "userid" INTEGER NOT NULL,

    CONSTRAINT "wishlist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rating" (
    "id" SERIAL NOT NULL,
    "userid" INTEGER NOT NULL,
    "desp" TEXT NOT NULL,
    "prductid" INTEGER NOT NULL,

    CONSTRAINT "rating_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_productsTowishlist" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "feedback_orderid_key" ON "feedback"("orderid");

-- CreateIndex
CREATE UNIQUE INDEX "admin_username_key" ON "admin"("username");

-- CreateIndex
CREATE UNIQUE INDEX "wishlist_userid_key" ON "wishlist"("userid");

-- CreateIndex
CREATE UNIQUE INDEX "_productsTowishlist_AB_unique" ON "_productsTowishlist"("A", "B");

-- CreateIndex
CREATE INDEX "_productsTowishlist_B_index" ON "_productsTowishlist"("B");

-- CreateIndex
CREATE UNIQUE INDEX "orders_feedbackid_key" ON "orders"("feedbackid");

-- CreateIndex
CREATE UNIQUE INDEX "user_name_key" ON "user"("name");

-- AddForeignKey
ALTER TABLE "productonwishlist" ADD CONSTRAINT "productonwishlist_userid_fkey" FOREIGN KEY ("userid") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "productonwishlist" ADD CONSTRAINT "productonwishlist_productid_fkey" FOREIGN KEY ("productid") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Brand" ADD CONSTRAINT "Brand_adminname_fkey" FOREIGN KEY ("adminname") REFERENCES "admin"("username") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "feedback" ADD CONSTRAINT "feedback_orderid_fkey" FOREIGN KEY ("orderid") REFERENCES "orders"("orderid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "feedback" ADD CONSTRAINT "feedback_userid_fkey" FOREIGN KEY ("userid") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "wishlist" ADD CONSTRAINT "wishlist_userid_fkey" FOREIGN KEY ("userid") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rating" ADD CONSTRAINT "rating_userid_fkey" FOREIGN KEY ("userid") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rating" ADD CONSTRAINT "rating_prductid_fkey" FOREIGN KEY ("prductid") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_productsTowishlist" ADD CONSTRAINT "_productsTowishlist_A_fkey" FOREIGN KEY ("A") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_productsTowishlist" ADD CONSTRAINT "_productsTowishlist_B_fkey" FOREIGN KEY ("B") REFERENCES "wishlist"("id") ON DELETE CASCADE ON UPDATE CASCADE;
