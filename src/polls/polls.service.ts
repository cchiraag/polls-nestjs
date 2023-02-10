import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Poll } from './entities/poll.entity';
import { Option } from './entities/option.entity';
import { Choice } from './entities/choice.entity';

@Injectable()
export class PollsService {

    // the total repositories used
    constructor(
        @InjectRepository(Poll)
        private pollsRepository: Repository<Poll>,
        @InjectRepository(Option)
        private optionsRepository: Repository<Option>,
        @InjectRepository(Choice)
        private choicesRepository: Repository<Choice>
    ) {}

    // async create(createUserDto: CreateUserDto) {
        
    //     try {
    //         const user = this.usersRepository.create(createUserDto);
    //         await this.usersRepository.save(user);
    //         delete user.password;   // delete password from the user
    //         return {
    //             success: true,
    //             message: 'New Record Created',
    //             data: await user,
    //         };
    //     } catch(err) {
    //         if (err.code == 'ER_DUP_ENTRY'){
    //             return {
    //                 success: false,
    //                 message: 'Username/Email already exists',
    //             }
    //         } else {
    //             return {
    //                 success: false,
    //                 message: 'Unable to create the record for user'
    //             }
    //         }
    //     }
    // }

    // to get list of total polls present in database (from polls table)
    async getTotalPolls(): Promise<Poll[]> {
        return await this.pollsRepository.find();
    }

    // to find a poll by id (in polls table)
    async findById(id: number): Promise<Poll> {
        return await this.pollsRepository.findOne({
            where: {
                id: id
            }
        })
    }

    // to get all the options for the corresponding poll (from options table)
    async getRequestedPoll(id: number): Promise<Option> {
        return await this.optionsRepository.findOne({
            where: {
                id: id
            }
        })
    }

    // to insert the selected choice in database (in choices table)
    async insertProvidedResponse(id: number, res: any) {
        return await this.choicesRepository.save({
            id: id,
            option_choice: res.option_choice,
            user_id: res.user_id
        });
    }

    // to get the total responses of a specified poll and the total choices for each option (from choices table)
    async getLiveResponses(id: number) {

        const countOfResponsesOfSinglePoll = await this.responsesForSinglePoll(id);
        const countForEachOption = await this.countForEachOption();

        return {
            totalResponses: countOfResponsesOfSinglePoll,
            optionsList: countForEachOption
        }
    }

    // to get total count of responses for the specified poll (from choices table)
    async responsesForSinglePoll(id: number): Promise<number> {
        return await this.choicesRepository.count({
            where: {
                id: id
            }
        })
    }

    // to get the count of each option from the specified list of choices
    async countForEachOption(): Promise<number[]> {
        const countOfFirstOption = await this.countForOneOption(1);
        const countOfSecondOption = await this.countForOneOption(2);
        const countOfThirdOption = await this.countForOneOption(3);
        const countOfFourthOption = await this.countForOneOption(4);

        return [countOfFirstOption, countOfSecondOption, countOfThirdOption, countOfFourthOption];
    }

    // to get the count for specified option (from choices table)
    async countForOneOption(num: number): Promise<number> {
        return await this.choicesRepository.count({
            where: {
                option_choice: num
            }
        });
    }

}