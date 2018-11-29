import { SearchFiltersContainerComponent } from './search-filters-container.component';
import * as searchCatFilters from './components';

export * from './components';

export const COMPONENTS = [
  ...searchCatFilters.COMPONENTS,
  SearchFiltersContainerComponent
]
