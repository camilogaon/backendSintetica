import { Module } from '@nestjs/common';
import { UserModule } from './users/user.module';
import { FieldModule } from './soccer_fields/field.module';
import { BookingModule } from './bookings/booking.module';


@Module({
  imports: [UserModule, FieldModule, BookingModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
