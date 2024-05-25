-- AlterTable
ALTER TABLE "orders" ADD COLUMN     "brandId" INTEGER NOT NULL DEFAULT 10;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
