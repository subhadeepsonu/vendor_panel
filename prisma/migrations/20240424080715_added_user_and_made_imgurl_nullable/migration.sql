-- AlterTable
ALTER TABLE "Banner" ALTER COLUMN "imgurl" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Brand" ALTER COLUMN "imgurl" DROP NOT NULL;

-- AlterTable
ALTER TABLE "products" ALTER COLUMN "imgurl" DROP NOT NULL;

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneno" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "imgurl" TEXT,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);
