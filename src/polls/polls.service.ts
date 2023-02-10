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
        const countForEachOption = await this.countForEachOption(id);

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
    async countForEachOption(id: number): Promise<number[]> {
        const countOfFirstOption = await this.countForOneOption(1, id);
        const countOfSecondOption = await this.countForOneOption(2, id);
        const countOfThirdOption = await this.countForOneOption(3, id);
        const countOfFourthOption = await this.countForOneOption(4, id);

        return [countOfFirstOption, countOfSecondOption, countOfThirdOption, countOfFourthOption];
    }

    // to get the count for specified option (from choices table)
    async countForOneOption(num: number, id: number): Promise<number> {
        return await this.choicesRepository.count({
            where: {
                id: id,
                option_choice: num
            }
        });
    }

}
