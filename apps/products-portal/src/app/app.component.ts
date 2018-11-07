import { Component, OnInit } from '@angular/core';
import { BrandService } from './services/brands.service';
import { Brand } from './domain/brand';
import { BrandError } from './domain/brand-error';

@Component({
  selector: 'ecom-workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'products-portal';

  allBrands: Brand[];
  selectedBrand: Brand;
  constructor(private brandService: BrandService) {}


  ngOnInit() {
    this.brandService.getAllBrands()
      .subscribe(
        (data: Brand[]) => this.allBrands = data ,
        (err: BrandError) => console.log(err.friendlyMessage),
        () => console.log('all done getting the brands from the server')
      )

      this.brandService.getBrandById(1)
      .subscribe(
        (data: Brand) => this.selectedBrand = data ,
        (err) => console.log(err),
        () => console.log('all done getting the brands from the server')
      )
  }

  addBrand() {
      const newBrand : Brand = {
          brandName: 'New Brand',
          isVisible: true,
          isSuppressed: false
      }

      console.log('new brand', newBrand);

      this.brandService.addBrand(newBrand)
        .subscribe(
            (data: Brand) => console.log('added new brand', data),
            (err) => console.log(err)
        )
  }

}
