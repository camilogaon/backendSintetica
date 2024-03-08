/*
  Warnings:

  - The primary key for the `fields` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `address_soccerfield` on the `fields` table. All the data in the column will be lost.
  - You are about to drop the column `description_soccerfield` on the `fields` table. All the data in the column will be lost.
  - You are about to drop the column `idsoccer_fields` on the `fields` table. All the data in the column will be lost.
  - You are about to drop the column `name_soccerfield` on the `fields` table. All the data in the column will be lost.
  - Added the required column `address_field` to the `fields` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description_field` to the `fields` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_fields` to the `fields` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name_field` to the `fields` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "fields" DROP CONSTRAINT "fields_pkey",
DROP COLUMN "address_soccerfield",
DROP COLUMN "description_soccerfield",
DROP COLUMN "idsoccer_fields",
DROP COLUMN "name_soccerfield",
ADD COLUMN     "address_field" TEXT NOT NULL,
ADD COLUMN     "description_field" TEXT NOT NULL,
ADD COLUMN     "id_fields" TEXT NOT NULL,
ADD COLUMN     "name_field" TEXT NOT NULL,
ADD CONSTRAINT "fields_pkey" PRIMARY KEY ("id_fields");
