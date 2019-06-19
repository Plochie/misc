import { AppComponentSharedModule } from './../../../app.shared.module';
import { QuillModule } from 'ngx-quill';
import { QuestionControlService } from './services/question-control.service';
import { ClarityModule } from '@clr/angular';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormQuestionComponent } from './form-question/form-question.component';
import { NgModule } from '@angular/core';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { SanitizeHtmlPipe } from '../pipe/sanitize-html.pipe';

@NgModule({
    declarations: [
        FormQuestionComponent,
        DynamicFormComponent,
        SanitizeHtmlPipe
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        ClarityModule,
        QuillModule
    ],
    exports: [
        FormQuestionComponent,
        DynamicFormComponent
    ],
    providers: [
        QuestionControlService
    ]
})
export class libraryDynamicFormModule { }
