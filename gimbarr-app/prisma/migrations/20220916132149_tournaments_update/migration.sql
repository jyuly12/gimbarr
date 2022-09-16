/*
  Warnings:

  - You are about to drop the column `content` on the `Tournament` table. All the data in the column will be lost.
  - You are about to drop the column `videoclip` on the `Tournament` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[ubicacion]` on the table `Tournament` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `price` to the `Tournament` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Tournament_videoclip_key";

-- AlterTable
ALTER TABLE "Tournament" DROP COLUMN "content",
DROP COLUMN "videoclip",
ADD COLUMN     "description" TEXT,
ADD COLUMN     "price" INTEGER NOT NULL,
ADD COLUMN     "ubicacion" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Tournament_ubicacion_key" ON "Tournament"("ubicacion");
