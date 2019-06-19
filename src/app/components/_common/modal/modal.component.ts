import { fadeInDown, fadeOutUp } from 'ng-animate';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  animations: [
    trigger('modalAnimation', [
      transition(':enter', useAnimation(fadeInDown, { params: { timing: 0.2 } })),
      transition(':leave', useAnimation(fadeOutUp, { params: { timing: 0.2 } }))
    ])
  ]
})
export class ModalComponent implements OnInit {

  @Input() isModalOpen = false;
  @Output() isModalOpenChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() class = '';

  constructor() { }

  ngOnInit() {
  }

  onDestroy() {
    this.isModalOpen = false;
    this.isModalOpenChange.emit(false);
  }
}
