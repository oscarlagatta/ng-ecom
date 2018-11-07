import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { RouterModule, Route, Routes } from '@angular/router';
import { fromEventPattern } from 'rxjs';
import { BrandService } from './services/brands.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BrandResolverService } from './services/brand-resolver.service';

const routes: Routes = [
   { path: 'dashboard', component: DashboardComponent, resolve: { resolvedBrands: BrandResolverService}}
]

@NgModule({
  declarations: [AppComponent, DashboardComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    NxModule.forRoot(),
    RouterModule.forRoot(routes, { initialNavigation: 'enabled' })
  ],
  providers: [BrandService, BrandResolverService],
  bootstrap: [AppComponent]
})
export class AppModule {}


// GET POST PUT DELETE
// 201 200 204

// CREATE
// http://localhost/api/brands
// 201 created

// READ
// 200 OK

// UPDATE
// 204 NO CONTENT

// DELETE
// 204 NO CONTENT
