import { CommentsComponent } from './components/_common/comments/comments.component';
import { libraryDynamicFormModule } from './components/_common/dynamic-form/dynamic-form.module';
import { QuillModule } from 'ngx-quill';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClarityModule } from '@clr/angular';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ModalComponent } from './components/_common/modal/modal.component';
import { PaginationComponent } from './components/_common/pagination/pagination.component';

@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        RouterModule,
        ClarityModule,
        QuillModule,
        libraryDynamicFormModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        RouterModule,
        ClarityModule,
        QuillModule,
        libraryDynamicFormModule
    ]
})
export class AppSharedModule { }




@NgModule({
    declarations: [
        ModalComponent,
        PaginationComponent,
        CommentsComponent
    ],
    imports: [
        CommonModule,
        ClarityModule
    ],
    exports: [
        ModalComponent,
        PaginationComponent,
        CommentsComponent
    ]
})
export class AppComponentSharedModule { }