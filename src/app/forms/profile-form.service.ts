import { DynamicFormData } from './../components/_common/dynamic-form/dynamic-form-data';
import { AccessRoll } from './../constants/access-roll';
import { QuillQuestion } from '../components/_common/dynamic-form/question-base/question-quill';
import { TextboxQuestion } from '../components/_common/dynamic-form/question-base/question-textbox';
import { DropdownQuestion } from '../components/_common/dynamic-form/question-base/question-dropdown';
import { QuestionBase } from '../components/_common/dynamic-form/question-base/question-base';
import { Injectable } from '@angular/core';
import { IDynamicForm } from 'src/app/components/_common/dynamic-form/dynamic-form.interface';
import { Student } from '../entities';
import { QuestionGroup } from '../components/_common/dynamic-form/question-base/question-group';

@Injectable({
    providedIn: 'root'
})
export class ProfileFormService implements IDynamicForm {

    constructor() { }

    getProfileData(data: Student, roll: AccessRoll): any[] {

        const formData = [];

        formData.push({ label: 'Name', value: data.name });

        return formData;
    }

    getDynamicFormData(): DynamicFormData {

        const ques: QuestionGroup[] = [

            new QuestionGroup('Contact Details', [
                new TextboxQuestion({ key: 'email', label: 'Email', type: 'text', order: 1 }),
                new TextboxQuestion({ key: 'contact', label: 'Contact', type: 'text', order: 1 })
            ]),
            new QuestionGroup('Address', [
                new TextboxQuestion({ key: 'address1', label: 'Address 1', type: 'text', order: 1 }),
                new TextboxQuestion({ key: 'address2', label: 'Address 2', type: 'text', order: 1 }),
                new TextboxQuestion({ key: 'city', label: 'City', type: 'text', order: 2 }),
                new TextboxQuestion({ key: 'country', label: 'Country', type: 'text', order: 2 }),
                new TextboxQuestion({ key: 'pincode', label: 'Pincode', type: 'text', order: 3 })
            ]),
            new QuestionGroup('Education Details', [
                new TextboxQuestion({ key: 'dept', label: 'Department', type: 'text', order: 1 }),
                new TextboxQuestion({ key: 'batch', label: 'Batch', type: 'number', order: 1 })
            ])
        ];

        const dynamicFormData = new DynamicFormData();
        dynamicFormData.questionGroups = ques;
        dynamicFormData.formButtons = false;

        return dynamicFormData;
    }

    // getQuestions(): QuestionBase<any>[] {

    //     const questions: QuestionBase<any>[] = [
    //         new TextboxQuestion({ key: 'email', label: 'Email', type: 'text', order: 3 }),
    //         new TextboxQuestion({ key: 'contact', label: 'Contact', type: 'text', order: 4 }),
    //         new TextboxQuestion({ key: 'address1', label: 'Address 1', type: 'text', order: 5 }),
    //         new TextboxQuestion({ key: 'address2', label: 'Address 2', type: 'text', order: 6 }),
    //         new TextboxQuestion({ key: 'city', label: 'City', type: 'text', order: 7 }),
    //         new TextboxQuestion({ key: 'state', label: 'State', type: 'text', order: 8 }),
    //         new TextboxQuestion({ key: 'country', label: 'Country', type: 'text', order: 9 }),
    //         new TextboxQuestion({ key: 'pincode', label: 'Pincode', type: 'text', order: 10 }),
    //         new TextboxQuestion({ key: 'dept', label: 'Department', type: 'text', order: 11 }),
    //         new TextboxQuestion({ key: 'batch', label: 'Batch', type: 'number', order: 12 })
    //     ];

    //     return questions.sort((a, b) => a.order - b.order);

    // }
}
