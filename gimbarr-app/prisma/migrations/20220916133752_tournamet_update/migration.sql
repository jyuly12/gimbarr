/*
  Warnings:

  - You are about to drop the column `ubicacion` on the `Tournament` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[location]` on the table `Tournament` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Tournament_ubicacion_key";

-- AlterTable
ALTER TABLE "Tournament" DROP COLUMN "ubicacion",
ADD COLUMN     "location" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Tournament_location_key" ON "Tournament"("location");
