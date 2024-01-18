import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesAndRoutingComponent } from './services-and-routing.component';

describe('ServicesAndRoutingComponent', () => {
  let component: ServicesAndRoutingComponent;
  let fixture: ComponentFixture<ServicesAndRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesAndRoutingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicesAndRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
