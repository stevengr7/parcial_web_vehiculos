import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehiculosListComponent } from './vehiculos-list.component';
import { VehiculosService } from '../vehiculos.service';
import { of } from 'rxjs';
import { faker } from '@faker-js/faker';
import { Vehiculo } from '../vehiculo.model';

describe('VehiculosListComponent', () => {
  let component: VehiculosListComponent;
  let fixture: ComponentFixture<VehiculosListComponent>;
  let mockService: jasmine.SpyObj<VehiculosService>;


  const mockVehiculos: Vehiculo[] = Array.from({ length: 3 }, (_, i) => ({
    id: i + 1,
    marca: faker.helpers.arrayElement(['Renault', 'Chevrolet', 'Nissan']),
    linea: faker.vehicle.model(),
    modelo: faker.number.int({ min: 2010, max: 2025 }),
    referencia: faker.string.alphanumeric(6).toUpperCase(),
    kilometraje: faker.number.int({ min: 10000, max: 80000 }),
    color: faker.vehicle.color(),
    imagen: faker.image.urlPicsumPhotos()
  }));

  beforeEach(async () => {

    mockService = jasmine.createSpyObj('VehiculosService', ['getVehiculos']);
    mockService.getVehiculos.and.returnValue(of(mockVehiculos));


    await TestBed.configureTestingModule({
      imports: [VehiculosListComponent], 
      providers: [{ provide: VehiculosService, useValue: mockService }]
    }).compileComponents();

    fixture = TestBed.createComponent(VehiculosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });


  it('debería mostrar tres filas en la tabla (más encabezado)', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const rows = compiled.querySelectorAll('tbody tr');
    expect(rows.length).toBe(3);
  });


  it('debería mostrar las marcas de los vehículos en la tabla', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const tableText = compiled.querySelector('tbody')?.textContent ?? '';
    mockVehiculos.forEach(v => {
      expect(tableText).toContain(v.marca);
    });
  });
});
