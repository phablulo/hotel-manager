import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaDeQuartoComponent } from './mapa-de-quarto.component';

describe('MapaDeQuartoComponent', () => {
  let component: MapaDeQuartoComponent;
  let fixture: ComponentFixture<MapaDeQuartoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapaDeQuartoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaDeQuartoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
