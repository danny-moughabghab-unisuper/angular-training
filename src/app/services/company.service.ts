import { Injectable } from '@angular/core';
import { Company } from '../models/company';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private httpClient: HttpClient ) { }



  getCompanies(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(`${environment.API_BASE}/company`).pipe(retry(3), catchError(this.errorHandling));
  }

  postCompany(company): Observable<any> {
    return this.httpClient.post<Company[]>(`${environment.API_BASE}/company`, company).pipe(retry(3), catchError(this.errorHandling));
  }

  deleteCompany(id): Observable<Company[]> {
    return this.httpClient.delete<Company[]>(`${environment.API_BASE}/company/${id}`).pipe(catchError(this.errorHandling));
  }

  errorHandling(error: Error): Observable<any> {
    console.error('ERROR', error);
    return new Observable();
  }


}
