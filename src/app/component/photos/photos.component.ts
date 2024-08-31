import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../shared/BaseComponent.component';
import { RPhotos } from '../../shared/response/photos.response';
import { HttpErrorResponse } from '@angular/common/http';
import { TableBtn, TableColumn } from '../../shared/model/matTable.model';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.scss',
})
export class PhotosComponent extends BaseComponent implements OnInit {
  public photosList: RPhotos[] = [];

  public introText = 'Button actions and payloads come here in textual form';
  public columns: TableColumn[] = [];
  public buttons: TableBtn[] = [];
  public data: RPhotos[] = [];
  public totalVolume: number = 0;
  public totalRides: number = 0;
  public footer: string = '';

  constructor() {
    super();

    this.columns = [
      {
        columnDef: 'index',
        header: 'No.',
        cell: (element: RPhotos) => `${element.albumId}`,
      },
      {
        columnDef: 'albumId',
        header: 'Album Id',
        cell: (element: RPhotos) => `${element.albumId}`,
      },
      {
        columnDef: 'id',
        header: 'Id',
        cell: (element: RPhotos) => `${element.id}`,
      },
      {
        columnDef: 'title',
        header: 'Title',
        cell: (element: RPhotos) => `${element.title}`,
      },
      {
        columnDef: 'url',
        header: 'URL',
        cell: (element: RPhotos) => `${element.url}`,
      },
      {
        columnDef: 'thumbnailUrl',
        header: 'Thumbnail',
        cell: (element: RPhotos) => `${element.thumbnailUrl}`,
      },
      {
        columnDef: 'action',
        header: 'Action',
        cell: (element: RPhotos) => `${element.thumbnailUrl}`,
      },
    ];

    this.buttons = [
      {
        styleClass: 'btn btn-success px-2',
        icon: 'bi bi-trash text-red',
        payload: (element: RPhotos) => `${element.id}`,
        action: 'delete',
      },
      {
        styleClass: 'btn btn-success px-2',
        icon: 'bi bi-pencil-square',
        payload: (element: RPhotos) => `${element.id}`,
        action: 'edit',
      },
    ];
  }

  ngOnInit(): void {
    this.getALLPhotos();
  }

  private getALLPhotos() {
    this.getDataSubscription<RPhotos[]>('photos').subscribe({
      next: (res: RPhotos[]) => {
        this.photosList = res;
        this.data = res;
      },

      error: (err: HttpErrorResponse) => {
        console.log(err);
      },
    });
  }

  // Here we can get the action and payload back from the table
  public buttonClick(result: string[]) {
    this.introText = `action: ${result[0]}, payload ${result[1]}`;
    console.log(result);
  }
}
