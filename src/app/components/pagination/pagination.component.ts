import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input() currentPage: number;
  @Input() totalPages: number;
  @Input() isClear: boolean;

  @Output() onChangePage = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  handleChangePage(value: number) {
    this.onChangePage.emit(this.currentPage + value);
  }
}
