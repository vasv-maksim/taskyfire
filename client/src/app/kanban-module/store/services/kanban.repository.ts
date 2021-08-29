import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class KanbanRepository {
  private url = '/';

  constructor(private http: HttpClient) { }

  public loadColumns(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  public loadCards(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
