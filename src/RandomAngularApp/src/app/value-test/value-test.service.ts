import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ValueTestService {

  constructor(private httpClient: HttpClient) { }

  public getValue(): Observable<any> {
    return this.httpClient.get(`${environment.api}/values`);
  }
}
