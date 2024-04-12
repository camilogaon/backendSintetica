import { Module } from '@nestjs/common';
import { UserModule } from './users/user.module';
import { FieldModule } from './soccer_fields/field.module';
import { BookingModule } from './bookings/booking.module';
import { AuthController } from './auth/auth.controller';
import { PrismaService } from './prisma/prisma.service';


@Module({
  imports: [UserModule, FieldModule, BookingModule],
  controllers: [AuthController],
  providers: [PrismaService],
})
export class AppModule {}
