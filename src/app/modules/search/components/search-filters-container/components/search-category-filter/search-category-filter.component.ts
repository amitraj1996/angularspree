import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-category-filter',
  templateUrl: './search-category-filter.component.html',
  styleUrls: ['./search-category-filter.component.scss']
})
export class SearchCategoryFilterComponent implements OnInit {
  @Input() categoryFilter;

  constructor() { }

  ngOnInit() {
  }

}
