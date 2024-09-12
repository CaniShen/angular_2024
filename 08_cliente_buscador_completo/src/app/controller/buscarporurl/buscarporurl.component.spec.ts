import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuscarporurlComponent } from './buscarporurl.component';




describe('BuscarporurlComponent', () => {
  let component: BuscarporurlComponent;
  let fixture: ComponentFixture<BuscarporurlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuscarporurlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarporurlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
