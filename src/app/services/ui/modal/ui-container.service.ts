import { Injectable, ElementRef } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UiContainerService {

    mainContainer: ElementRef;

    constructor() { }
}
