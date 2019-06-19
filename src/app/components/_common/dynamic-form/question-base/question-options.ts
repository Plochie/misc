export interface QuestionOptions<T> {

    value?: T;
    key?: string;
    label?: string;
    required?: boolean;
    order?: number;
    controlType?: string;
    options?: { key: string, value: string }[];
    type?: string;
    isEditable?: boolean;
    editable?: boolean;
    lineOrder?: number;
}
