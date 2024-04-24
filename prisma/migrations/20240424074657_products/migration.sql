-- CreateTable
CREATE TABLE "products" (
    "id" SERIAL NOT NULL,
    "stock" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "imgurl" INTEGER NOT NULL,
    "saleprice" INTEGER NOT NULL,
    "isfeatured" BOOLEAN NOT NULL,
    "brand" TEXT NOT NULL,
    "productype" TEXT NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);
