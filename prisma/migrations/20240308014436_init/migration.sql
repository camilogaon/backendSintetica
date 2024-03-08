-- CreateTable
CREATE TABLE "soccer_fields" (
    "idsoccer_fields" TEXT NOT NULL,
    "name_soccerfield" TEXT NOT NULL,
    "description_soccerfield" TEXT NOT NULL,
    "address_soccerfield" TEXT NOT NULL,
    "price_hour" TEXT NOT NULL,
    "imagen" BYTEA NOT NULL,
    "owner_id" TEXT NOT NULL,

    CONSTRAINT "soccer_fields_pkey" PRIMARY KEY ("idsoccer_fields")
);

-- AddForeignKey
ALTER TABLE "soccer_fields" ADD CONSTRAINT "soccer_fields_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "users"("idusers") ON DELETE RESTRICT ON UPDATE CASCADE;
