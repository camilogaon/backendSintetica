// auth.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { twilioClient } from './twilio.config';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('auth')
export class AuthController {

    constructor(private readonly prisma: PrismaService) {}

    @Post('send-verification')
    async sendVerification(@Body() body: { phoneNumber: string }) {
        try {
        const verification = await twilioClient.verify.services('VAe568f09c0bcc4b99da1e3a8c866a2c58')
            .verifications
            .create({ to: body.phoneNumber, channel: 'sms' });

        return { success: true };
        } catch (error) {
        console.error('Error sending verification:', error);
        throw error;
        }
    }

    @Post('verify-code')
    async verifyCode(@Body() body: { phoneNumber: string; verificationCode: string }) {
        try {
        const verificationCheck = await twilioClient.verify.services('VAe568f09c0bcc4b99da1e3a8c866a2c58')
            .verificationChecks
            .create({ to: body.phoneNumber, code: body.verificationCode });

        if (verificationCheck.status === 'approved') {
            return { success: true };
        } else {
            return { success: false, message: 'Invalid verification code' };
        }
        } catch (error) {
        console.error('Error verifying code:', error);
        throw error;
        }
    }


    @Post('register')
    async register(@Body() body: { phoneNumber: string; verificationCode: string; name: string; lastName: string; email: string }) {
        const { phoneNumber, verificationCode, name, lastName, email } = body;

        try {
            // Verifica el código de verificación
            const verificationCheck = await twilioClient.verify.services('VAe568f09c0bcc4b99da1e3a8c866a2c58')
                .verificationChecks
                .create({ to: phoneNumber, code: verificationCode });

            if (verificationCheck.status !== 'approved') {
                return { success: false, message: 'Invalid verification code' };
            }

            // Verifica si el usuario ya existe
            const existingUser = await this.prisma.users.findFirst({
                where: {
                    phone_number: phoneNumber,
                },
            });

            if (existingUser) {
                return { success: false, message: 'User already exists' };
            }

            const phoneNumberWithoutPrefix = phoneNumber.substring(3);

            // Crea el nuevo usuario
            const newUser = await this.prisma.users.create({
                data: {
                    idusers: phoneNumberWithoutPrefix, // Utiliza el número de teléfono sin el prefijo internacional
                    name_user: name,
                    lastname_user: lastName,
                    phone_number: phoneNumber,
                    email: email,
                    type_user: 'usuario' // Asignar el valor 'usuario' al campo type_user
                },
            });

            return { success: true, newUser };
        } catch (error) {
            console.error('Error registering user:', error);
            throw error;
        }
    }
}
