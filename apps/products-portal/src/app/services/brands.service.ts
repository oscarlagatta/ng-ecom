import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Brand } from '../domain/brand';
import { createOfflineCompileUrlResolver } from '@angular/compiler';
import { catchError } from 'rxjs/operators';
import { BrandError } from '../domain/brand-error';

@Injectable()
export class BrandService {
  constructor(private httpClient: HttpClient) { }


  getAllBrands(): Observable<Brand[] | BrandError> {
    console.log(`getting all the brands from the server`);
    return this.httpClient.get<Brand[]>('https://localhost:5001/api/brand')
      .pipe(
        catchError(err => this.handleHttpError(err))
      );
  }

  private handleHttpError(err: HttpErrorResponse) : Observable<BrandError> {
      const dataError: BrandError  = new BrandError()
      dataError.errorNumber = 100;
      dataError.message = err.statusText;
      dataError.friendlyMessage = 'An error occurred retrieving data';

      return throwError(dataError);
  }

  getBrandById(id:number) : Observable<Brand> {
    const getHeaders: HttpHeaders = new HttpHeaders( {
      'Accept': 'application/json',
      'Authorization': 'my-token'
    });
    return this.httpClient.get<Brand>(`https://localhost:5001/api/brand/${id}`, {
      headers: getHeaders
    });
  }

  addBrand(newBrand: Brand) : Observable<Brand> {
      return this.httpClient.post<Brand>(`https://localhost:5001/api/brand`, newBrand, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      })
  }

  updateBrand(updatedBrand: Brand): Observable<void>  {
    return this.httpClient.put<void>(`https://localhost:5001/api/brand/${updatedBrand.brandId}`, this.updateBrand,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }
    );
  }

  deleteBrand(brandId: number): Observable<void> {
      return this.httpClient.delete<void>(`https://localhost:5001/api/brand/${brandId}`);
  }

}
