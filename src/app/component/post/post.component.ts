import { Component, OnInit } from '@angular/core';
import { RPost } from '../../shared/response/post.response';
import { TableBtn, TableColumn } from '../../shared/model/matTable.model';
import { BaseComponent } from '../../shared/BaseComponent.component';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent extends BaseComponent implements OnInit {
  public postList: RPost[] = [];

  public introText = 'Button actions and payloads come here in textual form';
  public columns: TableColumn[] = [];
  public icons: TableBtn[] = [];
  public data: RPost[] = [];
  public totalVolume: number = 0;
  public totalRides: number = 0;
  public footer: string = '';

  public onPaginatorChange(event: PageEvent){
    console.log(event);
  }

  constructor() {
    super();
    this.columns = [
      {
        styleClass: '',
        columnDef: 'index',
        header: 'No',
        cell: (element: RPost) => `${element.title}`,
      },
      {
        styleClass: '',
        columnDef: 'title',
        header: 'Title',
        cell: (element: RPost) => `${element.title}`,
      },
      {
        styleClass: '',
        columnDef: 'body',
        header: 'Body',
        cell: (element: RPost) => `${element.body}`,
      },
    ];

    this.icons = [
      {
        styleClass: 'btn btn-success px-2',
        icon: 'bi bi-trash text-red',
        payload: (element: RPost) => `${element.id}`,
        action: 'delete',
      },
      {
        styleClass: 'btn btn-success px-2',
        icon: 'bi bi-pencil-square',
        payload: (element: RPost) => `${element.id}`,
        action: 'edit',
      },
    ];
  }

  ngOnInit(): void {
    this.getAllPost();
  }

  // Here we can get the action and payload back from the table
  public buttonClick(result: string[]) {
    this.introText = `action: ${result[0]}, payload ${result[1]}`;
    console.log(result);
  }
  private getAllPost() {
    this.getDataSubscription<RPost[]>('posts').subscribe({
      next: (res: RPost[]) => {
        console.log(res);
        this.data = res;
      },
    });
  }
}
