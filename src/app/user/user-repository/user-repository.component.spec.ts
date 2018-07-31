import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRepositoryComponent } from './user-repository.component';

describe('UserRepositoryComponent', () => {
  let component: UserRepositoryComponent;
  let fixture: ComponentFixture<UserRepositoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRepositoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRepositoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
