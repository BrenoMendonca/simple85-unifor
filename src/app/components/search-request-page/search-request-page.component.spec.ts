import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchRequestPageComponent } from './search-request-page.component';

describe('SearchRequestPageComponent', () => {
  let component: SearchRequestPageComponent;
  let fixture: ComponentFixture<SearchRequestPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchRequestPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchRequestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
