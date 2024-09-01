import { Component, EventEmitter, Input, Output, SimpleChanges, ViewChild } from '@angular/core';
import { TableBtn, TableColumn } from '../../shared/model/matTable.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-mat-table-generic',
  templateUrl: './mat-table-generic.component.html',
  styleUrl: './mat-table-generic.component.scss',
})
export class MatTableGenericComponent {
  @Input() columns: TableColumn[] = [];
  @Input() icons: TableBtn[] = [];
  @Input() data: any[] = [];
  @Input() filter: boolean = false;
  @Input() filterPlaceholder: string = 'Filter';
  @Input() footer: string = '';
  @Input() pagination: number[] = [];
  @Input() pageSize: number = 0;
  @Input() tableMinWidth: number = 500;
  @Output() filteredData = new EventEmitter<any[]>();
  @Output() buttonClick = new EventEmitter<string[]>();
  @Output() paginatorChange = new EventEmitter<PageEvent>();


  public currentPage: number = 1;
  public itemsPerPage: number = 5;

  dataSource!: MatTableDataSource<any>;
  displayedColumns!: string[];

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  ngOnChanges(changes: SimpleChanges): void {
    if (this.data) {
      if (changes['data']) {
        this.dataSource = new MatTableDataSource(this.data);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.displayedColumns = [...this.columns.map((c) => c.columnDef)];
        if (this.icons.length > 0)
          this.displayedColumns = [...this.displayedColumns, 'actions'];
      }
    }
  }

  public applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.filteredData.emit(this.dataSource.filteredData);

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }

    this.dataSource.sort = this.sort;
  }

  public onPaginatorChange(event: PageEvent){
    console.log(event);

    this.currentPage = event.pageIndex+1;
    this.itemsPerPage = event.pageSize;
    this.paginatorChange.emit(event);
  }
}
