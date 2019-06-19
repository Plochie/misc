import { QuestionBase } from './question-base';
import { QuestionOptions } from './question-options';

export class TextboxQuestion extends QuestionBase<string> {
    controlType = 'textbox';
    type: string;

    constructor(options: QuestionOptions<string>) {
        super(options);
        // tslint:disable-next-line: no-string-literal
        this.type = options['type'] || '';
    }
}
