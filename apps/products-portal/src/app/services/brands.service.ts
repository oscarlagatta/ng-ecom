import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Brand } from '../domain/brand';
import { createOfflineCompileUrlResolver } from '@angular/compiler';

@Injectable()
export class BrandService {
  constructor(private httpClient: HttpClient) { }


  getAllBrands(): Observable<Brand[]> {
    console.log(`getting all the brands from the server`);
    return this.httpClient.get<Brand[]>('https://localhost:5001/api/brand');
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
