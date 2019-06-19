import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() maxRecords = 0;
  @Input() maxPages = 0;
  @Input() currentPage = 1;
  @Output() pageChange = new EventEmitter<number>();

  Arr = Array; // Array type captured in a variable

  constructor() { }

  ngOnInit() {
   this.currentPage -= 1;
  }

  onPageChange(index: number) {
    this.pageChange.emit(index + 1);
  }

}
