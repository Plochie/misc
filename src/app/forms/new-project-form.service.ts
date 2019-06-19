import { StudentService } from './../components/students/services/student.service';
import { ChipboxQuestion } from './../components/_common/dynamic-form/question-base/question-chip';
import { QuestionGroup } from './../components/_common/dynamic-form/question-base/question-group';
import { TextAreaQuestion } from './../components/_common/dynamic-form/question-base/question-textarea';
import { DynamicFormData } from './../components/_common/dynamic-form/dynamic-form-data';
import { QuillQuestion } from '../components/_common/dynamic-form/question-base/question-quill';
import { TextboxQuestion } from '../components/_common/dynamic-form/question-base/question-textbox';
import { DropdownQuestion } from '../components/_common/dynamic-form/question-base/question-dropdown';
import { QuestionBase } from '../components/_common/dynamic-form/question-base/question-base';
import { Injectable } from '@angular/core';
import { IDynamicForm } from 'src/app/components/_common/dynamic-form/dynamic-form.interface';

@Injectable({
  providedIn: 'root'
})
export class NewProjectFormService implements IDynamicForm {

  constructor(private studentService: StudentService) { }

  getDynamicFormData(): DynamicFormData {

    const ques: QuestionGroup[] = [
      new QuestionGroup('Title', [new TextAreaQuestion({ key: 'title', label: 'Title', required: true, order: 1 })]),
      new QuestionGroup('Abstract', [new QuillQuestion({ key: 'projAbstract', label: 'Abstract', required: true, order: 2 })]),
      new QuestionGroup('Status', [
        new DropdownQuestion({
          value: 'PROPOSED',
          key: 'status', label: 'Status', options: [
            { key: 'PROPOSED', value: 'Proposed' },
            { key: 'APPROVED', value: 'Approved' },
            { key: 'IN_PROGRESS', value: 'In Progress' },
            { key: 'COMPLETED', value: 'Completed' }
          ],
          order: 3
        })
      ]),
      new QuestionGroup('Reference Projects', [
        new ChipboxQuestion({ key: 'referenceProjs', label: 'Reference Projs', type: 'text', required: false, order: 4 })
      ]),
      new QuestionGroup('Team Members', [
        new ChipboxQuestion({ key: 'teamMemberChips', label: 'Team Members', type: 'text', required: true, order: 5 }, this.studentService)
      ]),
      new QuestionGroup('Project Type', [
        new TextboxQuestion({ key: 'areaOfProj', label: 'Area Of Project', type: 'text', required: true, order: 6 }),
        new TextboxQuestion({ key: 'typeOfProj', label: 'Type Of Project', type: 'text', required: true, order: 7 })
      ]),
      new QuestionGroup('Keywords', [
        new ChipboxQuestion({ key: 'keywordsChips', label: 'Keywords', type: 'text', required: true, order: 8 })
      ]),
      new QuestionGroup('Funding', [
        new DropdownQuestion({
          value: 'false',
          key: 'reqFund', label: 'Request Funding', options: [
            { key: 'true', value: 'Yes' },
            { key: 'false', value: 'No' }
          ],
          order: 9
        }),
        new TextboxQuestion({ key: 'fundAmt', label: 'Funding Amount ₹', type: 'number', required: true, order: 10 })
      ]),
      new QuestionGroup('Privacy', [
        new DropdownQuestion({
          value: 'public',
          key: 'projView', label: 'Project View', options: [
            { key: 'private', value: 'Private' },
            { key: 'college', value: 'College' },
            { key: 'public', value: 'Public' }
          ],
          order: 11
        })
      ])
    ];

    const dynamicFormData = new DynamicFormData();
    // dynamicFormData.questions = questions.sort((a, b) => a.order - b.order);
    dynamicFormData.questionGroups = ques;
    dynamicFormData.formButtons = false;

    return dynamicFormData;
  }
}
