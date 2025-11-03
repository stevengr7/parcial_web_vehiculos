import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiculosListComponent } from './vehiculos/vehiculos-list/vehiculos-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, VehiculosListComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {}
