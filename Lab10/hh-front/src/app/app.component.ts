import { Component } from '@angular/core';
import { CompanyListComponent } from './company-list/company-list.component';

@Component({
  selector: 'app-root',
  template: `
    <h1>HeadHunter</h1>
    <app-company-list></app-company-list>
  `,
  styles: [`
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }
    h1 {
      color: #1785e5;
      margin-bottom: 30px;
      text-align: center;
    }
  `],
  imports: [CompanyListComponent],  
  standalone: true  
})
export class AppComponent {
  title = 'hh-front';
}