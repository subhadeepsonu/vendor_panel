/*
  Warnings:

  - Added the required column `targetscreen` to the `Banner` table without a default value. This is not possible if the table is not empty.
  - Made the column `imgurl` on table `products` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Banner" ADD COLUMN     "targetscreen" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "products" ALTER COLUMN "imgurl" SET NOT NULL,
ALTER COLUMN "imgurl" SET DEFAULT 'https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg';
