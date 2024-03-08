-- CreateTable
CREATE TABLE "bookings" (
    "idbookings" TEXT NOT NULL,
    "start_datatime" TIMESTAMP(3) NOT NULL,
    "end_datatime" TIMESTAMP(3) NOT NULL,
    "reservation_status" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "bookings_pkey" PRIMARY KEY ("idbookings")
);

-- AddForeignKey
ALTER TABLE "bookings" ADD CONSTRAINT "bookings_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("idusers") ON DELETE RESTRICT ON UPDATE CASCADE;
