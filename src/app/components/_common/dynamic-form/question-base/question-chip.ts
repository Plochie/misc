import { ISearchChip } from './../../../../abstract/search-chip';
import { QuestionBase } from './question-base';
import { QuestionOptions } from './question-options';

export class ChipboxQuestion<T> extends QuestionBase<T> {
    controlType = 'chipbox';
    searchService: ISearchChip<T>;

    constructor(options: QuestionOptions<any>, searService?: ISearchChip<T>) {
        super(options);
        this.searchService = searService;
    }
}


export class ChipData {
    key: string;
    value: any;

    constructor(key: string, value: any) {
        this.key = key;
        this.value = value;
    }
}
