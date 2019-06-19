import { QuestionBase } from './question-base';

export class QuestionGroup {
    questions: QuestionBase<any>[] = [];
    groupTitle: string;
    isEditable?: boolean;
    editable?: boolean;

    constructor(groupTitle: string, questions?: QuestionBase<any>[], editable?: boolean, isEditable?: boolean) {
        this.groupTitle = groupTitle;
        this.questions = questions;
        this.editable  = editable ? true : false;
        this.isEditable = isEditable ? true : false;
    }
}
