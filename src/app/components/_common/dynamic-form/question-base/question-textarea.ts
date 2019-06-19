import { QuestionBase } from './question-base';
import { QuestionOptions } from './question-options';

export class TextAreaQuestion extends QuestionBase<string> {
    controlType = 'textarea';
    type: string;

    constructor(options: QuestionOptions<string>) {
        super(options);
    }
}
