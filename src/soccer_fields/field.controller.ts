import { Controller, Get, Post, Put, Delete, Body, Param, NotFoundException } from "@nestjs/common";
import { FieldService } from "./field.service";
import { fields } from "@prisma/client";


@Controller('fields')
export class FieldController{
    constructor (private readonly fieldService: FieldService){}

    @Get()
    async getAllFields(){
        return this.fieldService.getAllFields()
    }

    @Post()
    async createFields(@Body() data:fields){
        return this.fieldService.createField(data)
    }

    @Get(':id_fields')
    async getFieldById(@Param('id_fields') id_fields){
        const fieldFound = await this.fieldService.getFieldById(id_fields)
        if(!fieldFound) throw new NotFoundException('Field does not exist')
        return fieldFound
    }

    @Delete(':id_fields')
    async deleteField(@Param('id_fiels') id_fields){
        try{
            return await this.fieldService.deleteField(id_fields)
        }catch(error){
            throw new NotFoundException("Field does not exist")
        }
    }

    @Put(':id_fields')
    async updateField(@Param('id__fields') id_fields, @Body() data:fields){
        try {
            return await this.fieldService.updateField(id_fields, data)
        }catch(error) {
            throw new NotFoundException("Field does not exist")
        }
    }
}
