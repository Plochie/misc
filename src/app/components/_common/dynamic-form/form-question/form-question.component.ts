import { Location } from '@angular/common';
import { ChipData, ChipboxQuestion } from './../question-base/question-chip';
import { fadeOut, fadeIn } from 'ng-animate';
import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { trigger, transition, useAnimation } from '@angular/animations';
import { staggerFadeInOut } from 'src/app/animations/stagger/fade-in-out.stagger';
import { QuestionGroup } from '../question-base/question-group';
import { QuestionBase } from '../question-base/question-base';

@Component({
  selector: 'library-question',
  templateUrl: './form-question.component.html',
  styleUrls: ['./form-question.component.scss'],
  animations: [
    staggerFadeInOut('100ms', '500ms'),
    trigger('fadeInOut', [
      transition(':enter', useAnimation(fadeIn, { params: { timing: 0.25 } })),
      transition(':leave', useAnimation(fadeOut, { params: { timing: 0.25 } }))
    ])
  ]
})
export class FormQuestionComponent implements OnInit, OnChanges {

  public readonly TEMP_CHIP = 'TempChip';

  @Input() questionGroups: QuestionGroup[];
  @Input() form: FormGroup;
  @Input() patchValue: any;
  @Input() pureForm: boolean;
  @Output() chipChange$ = new EventEmitter();

  modQuestionGroup: any  = new Object();

  private chipQuestions: {
    [key: string]: ChipboxQuestion<any>
  };

  // tempChip: any = new Object();

  backupForm: any;

  constructor(public location: Location) { }

  ngOnInit(): void {

    this.chipQuestions = {};

    // create temp chips
    for (const questionGroup of this.questionGroups) {
      for (const ques of questionGroup.questions) {
        if (ques.controlType === 'chipbox') {
          // add to chipQuestions
          this.chipQuestions[ques.key] = ques as ChipboxQuestion<any>;
          // create temp variables for chip input
          this.form.controls[ques.key].setValue([]);
          this.form.addControl(ques.key + this.TEMP_CHIP, new FormControl(''));
        }
      }
    }

    console.log(this.modQuestionGroup)

    this.form.patchValue(this.patchValue);
    // backup questions when discard to restore
    this.cloneFormData(this.form);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.form) {
      const newPatchValue = changes.patchValue.currentValue;
      this.form.patchValue(newPatchValue);
    }
  }

  // getClassColForQuestion(question: QuestionBase<any>) {
  //   const className = 'clr-col-md-' + question.order;

  //   const obj = new Object();
  //   obj[className] = true;

  //   return obj;
  // }

  onQuestionGroupSave(questionGroup: QuestionGroup) {
    // this.form.controls[question.key].setValue(question.value);
    questionGroup.editable = false;

    for (const question of questionGroup.questions) {
      this.patchValue[question.key] = this.form.controls[question.key].value;
    }
  }

  onQuestionGroupDiscard(questionGroup: QuestionGroup) {
    questionGroup.editable = false;

    for (const question of questionGroup.questions) {
      this.form.controls[question.key].setValue(this.backupForm[question.key]);
    }
  }

  onAddChip(event: KeyboardEvent, quesKey: string) {

    const tempChip = this.form.controls[quesKey + this.TEMP_CHIP].value as string;

    this.chipQuestions[quesKey].searchService.search(tempChip).subscribe(response => {
      console.log(response);
    })

    if (event.key.toLowerCase() === 'enter') {

      if (tempChip) {

        const oldValue = this.form.controls[quesKey].value as ChipData[];

        oldValue.push(new ChipData(tempChip.trim(), tempChip.trim()));

        this.form.controls[quesKey].setValue(oldValue);
        this.form.controls[quesKey + this.TEMP_CHIP].setValue('');
      }
    }
    // this.chipChange$.emit(tempChip);
  }

  onGoBack() {
    this.location.back();
  }

  cloneFormData(form: FormGroup): void {
    // reset backupForm as Object
    this.backupForm = new Object();
    // create form object for backup
    for (const key in form.controls) {
      if (form.controls.hasOwnProperty(key)) {
        this.backupForm[key] = form.controls[key].value;
      }
    }
  }

  // onSubmit(form: FormGroup) {
  //   this.projectService.updateProject(this.loggedUser, form.value).subscribe(response => {
  //     if (response.body) {
  //       this.project = response.body;
  //       // this.projectForm.patchValue(this.project);
  //     }
  //   });
  // }

  // onDiscard() {
  //   this.location.back();
  // }

}

