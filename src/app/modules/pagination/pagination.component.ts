import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  @Input() currentPage = 0;
  @Input() pageSize = 3;
  @Input() totalItems = 0;

  @Output() pageChange = new EventEmitter<number>();

  totalPages: any = 0;

  get pages(): number[] {
    return Array(this.totalPages).fill(0).map((_, index) => index + 1);
  }

  ngOnChanges(changes: any) {
    if (changes.totalItems || changes.pageSize) {
      this.totalPages = Math.ceil(this.totalItems / this.pageSize);
    }
  }

  changePage(page: number) {
    console.log("changePage" , page)
    if (page >= 1 && page <= this.totalPages && page !== this.currentPage) {
      this.currentPage = page;
      this.pageChange.emit(page);
    }
  }
}
