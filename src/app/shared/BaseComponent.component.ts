import { HttpClient } from "@angular/common/http";
import { Component, inject } from "@angular/core";
import { Observable } from "rxjs";

export class BaseComponent {

  public baseUrl: string = 'https://jsonplaceholder.typicode.com/'
  public _httpClient: HttpClient = inject(HttpClient);

  public getDataSubscription<RType>(url: string): Observable<RType>{
    return this._httpClient.get<RType>(this.baseUrl + url);
  }

  public postDataSubscription<PType, RType>(url: string, payload: PType): Observable<RType>{
    return this._httpClient.post<RType>(this.baseUrl + url, payload);
  }

}