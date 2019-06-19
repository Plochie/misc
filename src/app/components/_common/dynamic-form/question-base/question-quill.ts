import { QuestionBase } from './question-base';
import { QuestionOptions } from './question-options';

export class QuillQuestion extends QuestionBase<string> {
    controlType = 'quill';
    type: string;

    constructor(options: QuestionOptions<string>) {
        super(options);
    }
}
