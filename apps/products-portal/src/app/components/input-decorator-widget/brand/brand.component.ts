import { Component, OnInit, Input } from '@angular/core';
import { BrandService } from '../../../services/brands.service';
import { Brand } from '../../../domain/brand';
import { Observable } from 'rxjs';

@Component({
  selector: 'ecom-workspace-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {
  currentBrand: Brand;

  // getters and setters
  @Input()
  set brandId(id) {
    if (!this.currentBrand || this.currentBrand.brandId !== id) {
      this.PopulateDisplayBrand(id).subscribe(b => (this.currentBrand = b));
    }
  }

  constructor(private brandService: BrandService) {}

  ngOnInit() {}

  private PopulateDisplayBrand(brandId): Observable<Brand> {
    return this.brandService.getBrandById(brandId);
  }
}
