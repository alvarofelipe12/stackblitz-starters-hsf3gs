import { createReducer, on } from '@ngrx/store';
import { Sale } from '../sales.service';
import * as SalesActions from "./sales.actions";

export interface SalesState {
  selectedSale: Sale | null;
  filter: {
    category: string;
    startDate: string;
    endDate: string;
  };
}

export const initialState: SalesState = {
  selectedSale: null,
  filter: {
    category: '',
    startDate: '',
    endDate: '',
  },
};

export const salesReducer = createReducer(
  initialState,
  on(
    SalesActions.setSelectedSale,
    (state, { sale }) => ({
      ...state,
      selectedSale: sale,
    })
  ),
  on(
    SalesActions.setFilter,
    (state, { category, startDate, endDate }) => ({
      ...state,
      filter: { category, startDate, endDate },
    })
  )
);