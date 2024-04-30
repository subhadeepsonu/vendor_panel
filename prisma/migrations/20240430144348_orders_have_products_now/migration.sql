-- AlterTable
ALTER TABLE "orders" ALTER COLUMN "feedbackid" DROP NOT NULL;

-- AlterTable
ALTER TABLE "products" ADD COLUMN     "ordersOrderid" INTEGER,
ALTER COLUMN "nonveg" DROP DEFAULT;

-- CreateTable
CREATE TABLE "_ordersToproducts" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ordersToproducts_AB_unique" ON "_ordersToproducts"("A", "B");

-- CreateIndex
CREATE INDEX "_ordersToproducts_B_index" ON "_ordersToproducts"("B");

-- AddForeignKey
ALTER TABLE "_ordersToproducts" ADD CONSTRAINT "_ordersToproducts_A_fkey" FOREIGN KEY ("A") REFERENCES "orders"("orderid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ordersToproducts" ADD CONSTRAINT "_ordersToproducts_B_fkey" FOREIGN KEY ("B") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;
