import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';

export interface Sale {
  id: number;
  product: string;
  category: string;
  amount: number;
  date: string;
}

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  private salesData: Sale[] = [
    { id: 1, product: 'Laptop', category: 'Electronics', amount: 1200, date: '2023-10-01' },
    { id: 2, product: 'Shoes', category: 'Apparel', amount: 80, date: '2023-10-02' },
    { id: 3, product: 'Headphones', category: 'Electronics', amount: 200, date: '2023-10-05' },
    { id: 4, product: 'Coffee Maker', category: 'Kitchen', amount: 150, date: '2023-10-06' },
    { id: 5, product: 'Book', category: 'Books', amount: 20, date: '2023-10-07' },
  ];

  constructor(private httpClient: HttpClient) { }

  public getSales(): Observable<Sale[]> {
    return of(this.salesData);
  }

  public salesFiltered(category: string, startDate: string, endDate: string): Observable<Sale[]> {
    return this.getSales()
      .pipe(
        map(sales => {
          sales.filter(ob =>
            (category ? ob.category === category : true) &&
            (!startDate || ob.date >= startDate) &&
            (!endDate || ob.date <= endDate)
          )
        })
      );
  }
}
