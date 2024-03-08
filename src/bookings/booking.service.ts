import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { bookings } from "@prisma/client";


@Injectable()
export class BookingService{
    constructor(private prisma: PrismaService) {}

    async getAllBookings(): Promise<bookings[]>{
        return this.prisma.bookings.findMany();
    }

    async getBookingById(idbookings): Promise<bookings> {
        return this.prisma.bookings.findUnique({
            where: {
                idbookings
            }
        })
    }

    async createBooking(data: bookings): Promise<bookings> {
        return this.prisma.bookings.create({
            data
        })
    }

    async updateBooking(idbookings, data: bookings): Promise<bookings> {
        return this.prisma.bookings.update({
            where: {
                idbookings
            },
            data
        })
    }

    async deleteBooking(idbookings): Promise<bookings> {
        return this.prisma.bookings.delete({
            where: {
                idbookings
            }
        })
    }


}