import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCategoryFilterComponent } from './search-category-filter.component';

describe('SearchCategoryFilterComponent', () => {
  let component: SearchCategoryFilterComponent;
  let fixture: ComponentFixture<SearchCategoryFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchCategoryFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCategoryFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
