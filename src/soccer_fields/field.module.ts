import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { FieldController } from "./field.controller";
import { FieldService } from "./field.service";


@Module({
    controllers: [FieldController],
    providers: [FieldService],
    imports: [PrismaModule]
})
export class FieldModule {}