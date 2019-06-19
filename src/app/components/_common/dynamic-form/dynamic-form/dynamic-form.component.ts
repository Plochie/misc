import { Subject } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { QuestionControlService } from '../services/question-control.service';
import { QuestionBase } from '../question-base/question-base';
import { DynamicFormData } from '../dynamic-form-data';

@Component({
  selector: 'library-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit, OnChanges {

  @Input() dynamicFormData: DynamicFormData;
  @Input() pureForm: boolean;
  @Input() patchValue: any;
  @Output() submitChange$ = new EventEmitter<FormGroup>();
  @Output() chipChange$ = new EventEmitter();

  form: FormGroup;
  formPatchChange$: Subject<any> = new Subject<any>();

  constructor(private questionControlService: QuestionControlService) { }

  ngOnInit() {

    // collect all questions
    const questionsArry = this.dynamicFormData.questionGroups.map(group => {
      return group.questions;
    });

    // flatten all questions
    const questions = [].concat.apply([], questionsArry);

    this.form = this.questionControlService.toFormGroup(questions);

    this.form.patchValue(this.patchValue);
  }

  chipChangeEvent(event: any) {
    this.chipChange$.emit(event);
  }

  onSubmit() {
    this.submitChange$.emit(this.form);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.patchValue.currentValue && this.form) {
      this.form.patchValue(changes.patchValue.currentValue);
    }
  }

}
