import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';
import { BrandService } from '../../services/brands.service';
import { ActivatedRoute } from '@angular/router';
import { Brand } from '../../domain/brand';
import { BrandError } from '../../domain/brand-error';

@Component({
  selector: 'ecom-workspace-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @Input() brandId: number;

  allBrands: Brand[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const resolvedData: Brand[] | BrandError = this.route.snapshot.data[
      'resolvedBrands'
    ];

    if (resolvedData instanceof BrandError) {
      console.log(`dashboard compoenent error`);
    } else {
      this.allBrands = resolvedData;
    }
  }
}
