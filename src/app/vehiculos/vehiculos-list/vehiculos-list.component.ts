import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiculosService } from '../vehiculos.service';
import { Vehiculo } from '../vehiculo.model';

@Component({
  selector: 'app-vehiculos-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vehiculos-list.component.html',
  styleUrls: ['./vehiculos-list.component.css']
})
export class VehiculosListComponent implements OnInit {
  vehiculos: Vehiculo[] = [];
  conteoPorMarca: { marca: string; cantidad: number }[] = [];

  constructor(private service: VehiculosService) {}

  ngOnInit(): void {
    this.service.getVehiculos().subscribe({
      next: (data) => {
        this.vehiculos = data;
        this.calcularConteo();
      }
    });
  }

  private calcularConteo(): void {
    const mapa = new Map<string, number>();
    this.vehiculos.forEach(v => 
      mapa.set(v.marca, (mapa.get(v.marca) ?? 0) + 1)
    );
    this.conteoPorMarca = Array.from(mapa.entries()).map(([marca, cantidad]) => ({
      marca,
      cantidad
    }));
  }
}
