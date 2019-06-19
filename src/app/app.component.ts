import { UiContainerService } from './services/ui/modal/ui-container.service';
import { DynamicModalService } from './services/ui/modal/dynamic-modal.service';
import { Component, OnInit, ViewContainerRef, ViewChild, ElementRef } from '@angular/core';
import { commonconstants } from './constants/commons-constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'app-company';
  websiteTitle = '';
  copywrite = '';

  @ViewChild('mainContainer') mainContainer: ElementRef;

  constructor(public vcr: ViewContainerRef,
              public dynamicModalService: DynamicModalService,
              public uiContainer: UiContainerService) {
    // Service need a container, set appwide once
    this.dynamicModalService.setViewContainerRef(this.vcr);
  }

  ngOnInit() {
    this.websiteTitle = commonconstants.websiteTitle;
    this.copywrite = commonconstants.copywrite;
    // add main container to ui container service
    this.uiContainer.mainContainer = this.mainContainer;
  }
}
