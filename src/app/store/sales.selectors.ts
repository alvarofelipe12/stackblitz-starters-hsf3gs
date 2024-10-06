import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SalesState } from "./sales.reducer";

export const selectSalesState = createFeatureSelector<SalesState>('sales');

export const selectSelectedSale = createSelector(
  selectSalesState,
  (state: SalesState) => state.selectedSale
);
export const selectFilter = createSelector(
  selectSalesState,
  (state: SalesState) => state.filter
);