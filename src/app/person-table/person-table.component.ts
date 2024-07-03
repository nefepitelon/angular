import { Component, OnInit } from '@angular/core';
import { PersonDataService } from '../person-data.service';

@Component({
  selector: 'app-person-table',
  templateUrl: './person-table.component.html',
  styleUrls: ['./person-table.component.css']
})
export class PersonTableComponent implements OnInit {
  displayedColumns: string[] = ['name', 'number', 'document', 'city', 'actions'];
  dataSource: any[] = [];

  constructor(private personDataService: PersonDataService) { }

  ngOnInit(): void {
    this.personDataService.getData().subscribe(data => {
      this.dataSource = data;
    });
  }

  updateData(row: any): void {
    // Implementa aquí la lógica para actualizar los datos
    this.personDataService.saveData(this.dataSource);
  }
}
