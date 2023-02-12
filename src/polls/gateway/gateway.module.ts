import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Choice } from "../entities/choice.entity";
import { Poll } from "../entities/poll.entity";
import { Option } from "../entities/option.entity";
import { PollsModule } from "../polls.module";
import { PollsService } from "../polls.service";
import { Gateway } from "./gateway";

@Module({
    imports: [PollsModule,
        TypeOrmModule.forFeature([Poll]),
        TypeOrmModule.forFeature([Option]),
        TypeOrmModule.forFeature([Choice])
    ],
    providers: [Gateway, PollsService],
    exports: [Gateway]
})

export class GatewayModule { }