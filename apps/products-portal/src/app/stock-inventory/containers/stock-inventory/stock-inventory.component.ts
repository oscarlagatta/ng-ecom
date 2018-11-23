import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';
import { Product } from '../../models/product.interface';
@Component({
  selector: 'ecom-workspace-stock-inventory',
  templateUrl: 'stock-inventory.component.html',
  styleUrls: ['stock-inventory.component.html']
})
export class StockInventoryComponent implements OnInit {
  products: Product[] = [
    { id: 1, price: 2800, productName: 'MacBook Pro' },
    { id: 2, price: 60, productName: 'USB-C Adaptor' },
    { id: 3, price: 400, productName: 'iPod' },
    { id: 4, price: 900, productName: 'iPhone' },
    { id: 5, price: 600, productName: 'Apple Watch' }
  ];

  constructor() {}

  form = new FormGroup({
    store: new FormGroup({
      branch: new FormControl(''),
      code: new FormControl('')
    }),
    selector: this.createStock({}),
    stock: new FormArray([
      this.createStock({ product_id: 1, quantity: 20 }),
      this.createStock({ product_id: 3, quantity: 50 })
    ])
  });

  ngOnInit() {}

  createStock(stock) {
    return new FormGroup({
      product_id: new FormControl(stock.product_id || ''),
      quantity: new FormControl(stock.quantity || 10)
    });
  }

  onSubmit() {
    console.log(`Submit`, this.form.value);
  }
}
