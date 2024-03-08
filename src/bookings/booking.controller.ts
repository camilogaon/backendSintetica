import { Controller, Get, Post, Put, Delete, Body, Param, NotFoundException } from "@nestjs/common";
import { BookingService } from "./booking.service";
import { bookings } from "@prisma/client";

@Controller('bookings')
export class BookingController {

    constructor(private readonly bookingService: BookingService){}

    @Get()
    async getAllBookings(){
        return this.bookingService.getAllBookings()
    }

    @Post()
    async createBooking(@Body() data:bookings){
        return this.bookingService.createBooking(data)
    }

    @Get(':idbookings')
    async getBookingById(@Param('idbookings') idbookings){
        const bookingFound = await this.bookingService.getBookingById(idbookings)
        if(!bookingFound) throw new NotFoundException('Booking does not exist')
        return bookingFound
    }

    @Delete(':idbookings')
    async deleteBooking(@Param('idbookings') idbookings){
        try {
            return await this.bookingService.deleteBooking(idbookings)
        } catch (error) {
            throw new NotFoundException("Booking does not found")
        }
    }

    @Put(':idbookings')
    async updateBooking(@Param('idbookings') idbookings, @Body() data:bookings){
        try {
            return await this.bookingService.updateBooking(idbookings, data)
        } catch (error) {
            throw new NotFoundException("Booking does not exist")
        }
    }



}