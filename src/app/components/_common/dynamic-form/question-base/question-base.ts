import { QuestionOptions } from './question-options';
export class QuestionBase<T> {
    value: T;
    key: string;
    label: string;
    required: boolean;
    order: number;
    controlType: string;
    options?: { key: string, value: string }[];
    type?: string;
    // isEditable = false;
    // editable = false;

    constructor(options: QuestionOptions<T>) {
        this.value = options.value;
        this.key = options.key || '';
        this.label = options.label || '';
        this.required = !!options.required;
        this.order = options.order === undefined ? 1 : options.order;
        this.controlType = options.controlType || '';

        // this.editable  = options.editable ? true : false;
        // this.isEditable = options.isEditable ? true : false;
    }
}
