-- CreateTable
CREATE TABLE "Tournament" (
    "id" SERIAL NOT NULL,
    "videoclip" TEXT,
    "published" BOOLEAN NOT NULL DEFAULT true,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Tournament_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Tournament_videoclip_key" ON "Tournament"("videoclip");
