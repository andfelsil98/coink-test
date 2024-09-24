import { HttpClient, HttpParams, HttpClientModule  } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Endpoints } from '../core/resources/endpoints';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FormsService {
  public http = inject(HttpClient);
  public endpoints = inject(Endpoints);

  getDocumentTypes(){
    let params = new HttpParams();
    params = params.set('apiKey', '030106')
    return this.http.get<any>(`${environment.urlCoinkServer}${this.endpoints.getDocumentType}`, {params})
  }
}
