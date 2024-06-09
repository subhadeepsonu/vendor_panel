-- AlterTable
ALTER TABLE "Feedback" ADD COLUMN     "brandId" INTEGER;

-- AddForeignKey
ALTER TABLE "Feedback" ADD CONSTRAINT "Feedback_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE SET NULL ON UPDATE CASCADE;
