// app.component.ts

import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  dataSource: any[] = [];
  newData: any = {};

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      this.dataSource = data;
    });
  }

  agregarDato(): void {
    this.dataService.addData(this.newData).subscribe(() => {
      // Actualizar la tabla después de agregar
      this.dataService.getData().subscribe(data => {
        this.dataSource = data;
      });

      // Limpiar el formulario
      this.newData = {};
    });
  }
}
