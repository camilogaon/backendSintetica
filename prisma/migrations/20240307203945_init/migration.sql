-- CreateTable
CREATE TABLE "users" (
    "idusers" INTEGER NOT NULL,
    "name_user" TEXT NOT NULL,
    "lastname_user" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "type_user" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("idusers")
);
