import { Component, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Company } from '../models/company';
import { Vacancy } from '../models/vacancy';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css'],
  standalone: true,
  imports: [CommonModule],
  providers: [CurrencyPipe]
})
export class CompanyListComponent implements OnInit {
  companies: Company[] = [];
  selectedCompany?: Company | null = null;
  vacancies: Vacancy[] = [];

  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies(): void {
    this.companyService.getCompanies()
      .subscribe(companies => this.companies = companies);
  }

  selectCompany(company: Company): void {
    this.selectedCompany = company;
    this.companyService.getCompanyVacancies(company.id)
      .subscribe(vacancies => this.vacancies = vacancies);
  }
}