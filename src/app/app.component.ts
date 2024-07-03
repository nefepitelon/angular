// app.component.ts
import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'numero', 'documento', 'ciudad'];
  data: any[] = [];
  newNombre: string = '';
  newNumero: string = '';
  newDocumento: string = '';
  newCiudad: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.cargarDatos();
  }

  cargarDatos(): void {
    this.dataService.getData().subscribe(
      (result) => {
        this.data = result;
      },
      (error) => {
        console.error('Error loading data: ', error);
      }
    );
  }

  agregarDatos(): void {
    const newData = {
      nombre: this.newNombre,
      numero: this.newNumero,
      documento: this.newDocumento,
      ciudad: this.newCiudad
    };

    // Agrega la nueva tupla a la data existente
    this.data.push(newData);

    // Actualizar el dataSource manualmente para que Angular Material actualice la tabla
    this.data = [...this.data];

    // Limpiar los inputs después de agregar
    this.newNombre = '';
    this.newNumero = '';
    this.newDocumento = '';
    this.newCiudad = '';
  }
}
