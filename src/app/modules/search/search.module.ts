import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SharedModule } from './../../shared/index';

import { COMPONENTS } from './';
import { FilterSummarySortByComponent } from './components/filter-summary-container/components/filter-summary-sort-by/filter-summary-sort-by.component';
import { SearchResultListComponent } from './components/search-results-container/components/search-result-list/search-result-list.component';

@NgModule({
  declarations: [
    ...COMPONENTS,
    FilterSummarySortByComponent,
    SearchResultListComponent,
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,

    SharedModule
  ]
})
export class SearchModule { }
