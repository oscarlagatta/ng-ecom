import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent, TrackDirective } from './app.component';
import { NxModule } from '@nrwl/nx';
import { RouterModule, Route, Routes } from '@angular/router';
import { fromEventPattern } from 'rxjs';
import { BrandService } from './services/brands.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BrandResolverService } from './services/brand-resolver.service';
import { OpenIdConnectService } from './domain/open-id-connect';
import { AddRequestHeaderInterceptor } from './services/add-header.interceptor';
import { LogResponseInterceptor } from './services/log-response.interceptor';
import { CacheInterceptor } from './services/cache.interceptor';
import { HttpCacheService } from './services/http-cache.service';
import { InputDecoratorWidgetComponent } from './components/input-decorator-widget/input-decorator-widget.component';
import { BrandComponent } from './components/input-decorator-widget/brand/brand.component';
import { OutputDecoratorComponent } from './components/output-decorator/output-decorator.component';
import { HelpBannerComponent } from './components/output-decorator/help-banner/help-banner.component';
import { QueryDecoratorComponent } from './components/query-decorator/query-decorator.component';
import { ToggleViewContentComponent } from './components/query-decorator/toggle-view-content/toggle-view-content.component';
import {
  MenuModule,
  PanelModule,
  ChartModule,
  InputTextModule,
  ButtonModule,
  MessageModule,
  CheckboxModule
} from 'primeng/primeng';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { SettingsComponent } from './components/settings/settings.component';
import { StatisticComponent } from './components/statistic/statistic.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrandsComponent } from './components/brands/brands.component';
import { FielderrorsComponent } from './components/fielderrors/fielderrors.component';

import { StockInventoryModule } from './stock-inventory/stock-inventory.module';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    resolve: { resolvedBrands: BrandResolverService }
  },
  {
    path: 'brands',
    component: BrandsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TrackDirective,
    InputDecoratorWidgetComponent,
    BrandComponent,
    OutputDecoratorComponent,
    HelpBannerComponent,
    QueryDecoratorComponent,
    ToggleViewContentComponent,
    SettingsComponent,
    StatisticComponent,
    BrandsComponent,
    FielderrorsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    PanelModule,
    MenuModule,
    MessageModule,
    ButtonModule,
    CheckboxModule,
    ChartModule,
    TableModule,
    PaginatorModule,
    InputTextModule,
    StockInventoryModule,
    NxModule.forRoot(),
    RouterModule.forRoot(routes, { initialNavigation: 'enabled' })
  ],
  providers: [
    BrandService,
    BrandResolverService,
    HttpCacheService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AddRequestHeaderInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LogResponseInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CacheInterceptor,
      multi: true
    }
  ],
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
