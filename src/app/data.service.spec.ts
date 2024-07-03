// data.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators'; 


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataUrl = 'assets/data.json'; // Ruta al archivo JSON

  constructor(private http: HttpClient) {}

  getData(): Observable<any[]> {
    return this.http.get<any[]>(this.dataUrl);
  }

  addData(newData: any): Observable<any> {
    return this.getData().pipe(
      map((data) => {
        data.push(newData);
        return data;
      }),
      switchMap((updatedData) => this.http.put(this.dataUrl, updatedData))
    );
  }
}
