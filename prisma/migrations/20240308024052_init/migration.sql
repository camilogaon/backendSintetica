/*
  Warnings:

  - You are about to drop the `soccer_fields` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "soccer_fields" DROP CONSTRAINT "soccer_fields_owner_id_fkey";

-- DropTable
DROP TABLE "soccer_fields";

-- CreateTable
CREATE TABLE "fields" (
    "idsoccer_fields" TEXT NOT NULL,
    "name_soccerfield" TEXT NOT NULL,
    "description_soccerfield" TEXT NOT NULL,
    "address_soccerfield" TEXT NOT NULL,
    "price_hour" TEXT NOT NULL,
    "imagen" BYTEA NOT NULL,
    "owner_id" TEXT NOT NULL,

    CONSTRAINT "fields_pkey" PRIMARY KEY ("idsoccer_fields")
);

-- AddForeignKey
ALTER TABLE "fields" ADD CONSTRAINT "fields_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "users"("idusers") ON DELETE RESTRICT ON UPDATE CASCADE;
