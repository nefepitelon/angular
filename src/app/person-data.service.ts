import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonDataService {
  private dataUrl = 'assets/data.json'; // URL del archivo JSON

  constructor(private http: HttpClient) { }

  getData(): Observable<any[]> {
    return this.http.get<any[]>(this.dataUrl);
  }

  saveData(data: any[]): void {
    // Implementa aquí la lógica para guardar los datos, si es necesario
  }
}
