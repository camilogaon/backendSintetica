import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { fields } from "@prisma/client";

@Injectable()
export class FieldService {
    constructor(private prisma: PrismaService){}

    async getAllFields(): Promise<fields[]> {
        return this.prisma.fields.findMany();
    }

    async getFieldById(id_fields): Promise<fields>{
        return this.prisma.fields.findUnique({
            where: {
                id_fields
            }
        })
    }

    async createField(data: fields): Promise<fields>{
        return this.prisma.fields.create({
            data
        })
    }

    async updateField(id_fields, data: fields): Promise<fields> {
        return this.prisma.fields.update({
            where: {
                id_fields
            },
            data
        })
    }

    async deleteField(id_fields): Promise<fields> {
        return this.prisma.fields.delete({
            where: {
                id_fields
            }
        })
    }
}