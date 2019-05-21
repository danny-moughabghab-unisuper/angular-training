import { Component, OnInit, OnDestroy } from '@angular/core';

import { Company } from 'src/app/models/company';
import { CompanyService } from 'src/app/services/company.service';
import { Observable, Subscription } from 'rxjs';

import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'fbc-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit, OnDestroy {

  constructor(private companyService: CompanyService) { }

  companies$: Observable<Company[]>;

  ngOnInit() {
    this.companies$ = this.getCompanies();
  }

  ngOnDestroy() {
  }

  getCompanies() {
    return this.companyService.getCompanies()
    .pipe(map(companies => companies.sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0)));
  }

  postCompany() {
    return this.companyService.postCompany({name: 'something', phone: Math.floor(100000 + Math.random() * 900000), email: 'really.unexpected@test.com.au'})
    .pipe(tap(m => console.log(m))).subscribe(() => { this.companies$ = this.companyService.getCompanies(); });
  }

  deleteCompany(company) {
    this.companyService.deleteCompany(company.id).subscribe(() => { this.companies$ = this.companyService.getCompanies(); });
  }

}
