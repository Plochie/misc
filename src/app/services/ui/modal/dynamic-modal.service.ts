import { ComponentFactoryResolver, Injectable, ViewContainerRef } from '@angular/core';
import { take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DynamicModalService {

  vcr: ViewContainerRef;

  constructor(private cfr: ComponentFactoryResolver) { }

  setViewContainerRef(vcr: ViewContainerRef) {
    this.vcr = vcr;
  }

  openConfirmationModal(modalClass: any, data: any) {
    const factory = this.cfr.resolveComponentFactory(modalClass);
    const ref = factory.create(this.vcr.injector);
    // Access component instance
    (ref.instance as IModalData).data = data;
    // Play nice with detection changes
    setTimeout(() => this.vcr.insert(ref.hostView));

    return (ref.instance as IModalData)
      .destroy$.asObservable()
      .pipe(
        take(1),
        tap(() => ref.destroy())
      )
      .toPromise();
  }
}


import { Subject } from 'rxjs';
export interface IModalData {
  destroy$?: Subject<any>;
  data?: any;
}
