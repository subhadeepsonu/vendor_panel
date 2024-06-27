-- AlterTable
ALTER TABLE "Brand" ADD COLUMN     "parcelCharge" INTEGER NOT NULL DEFAULT 5,
ADD COLUMN     "parcelPerItem" BOOLEAN NOT NULL DEFAULT false;
