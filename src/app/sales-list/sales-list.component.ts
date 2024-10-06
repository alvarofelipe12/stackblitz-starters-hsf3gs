import { Component, OnInit } from '@angular/core';
import { Sale, SalesService } from '../sales.service';
import { Store } from '@ngrx/store';
import { selectFilter, selectSelectedSale } from '../store/sales.selectors';
import { Observable } from 'rxjs';
import { setFilter, setSelectedSale } from '../store/sales.actions';

@Component({
  selector: 'app-sales-list',
  standalone: true,
  imports: [],
  templateUrl: './sales-list.component.html',
  styleUrl: './sales-list.component.css'
})
export class SalesListComponent implements OnInit {
  sales$: Observable<Sale[]>;
  selectedSale$: Observable<Sale | null>;
  filter$: Observable<{ category: string; startDate: string; endDate: string }>;
  constructor(
    private salesService: SalesService,
    private store: Store
  ) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.filter$ = this.store.select(selectFilter);
    this.selectedSale$ = this.store.select(selectSelectedSale);
    this.sales$ = this.salesService.getSales();
  }

  public onSaleSelected(sale: Sale) {
    this.store.dispatch(setSelectedSale({ sale }))
  }

  public onFilterChange(category: string, startDate: string, endDate: string) {
    this.store.dispatch(setFilter({ category, startDate, endDate }));
    this.sales$ = this.salesService.salesFiltered(category, startDate, endDate);
  }

}
