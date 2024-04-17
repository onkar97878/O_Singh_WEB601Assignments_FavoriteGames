import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifycontentformComponent } from './modifycontentform.component';

describe('ModifycontentformComponent', () => {
  let component: ModifycontentformComponent;
  let fixture: ComponentFixture<ModifycontentformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModifycontentformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModifycontentformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
