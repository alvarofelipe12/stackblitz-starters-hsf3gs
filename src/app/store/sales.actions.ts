import { createAction, props } from "@ngrx/store";
import { Sale } from "../sales.service";

export const setSelectedSale = createAction(
  '[Sales] Set Selected Sale',
  props<{ sale: Sale }>
);

export const setFilter = createAction(
  '[Sales] Set Filter',
  props<{ category: string, startDate: string, endDate: string }>()
);
