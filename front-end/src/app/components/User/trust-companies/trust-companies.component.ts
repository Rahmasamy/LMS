import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-trust-companies',
  standalone: true,
  imports: [NgFor],
  templateUrl: './trust-companies.component.html',
  styleUrl: './trust-companies.component.css'
})
export class TrustCompaniesComponent {
  images: Array<string> = [
    "assets/img/companies/lead-01.png",
    "assets/img/companies/lead-02.png",
    "assets/img/companies/lead-03.png",
    "assets/img/companies/lead-04.png",
    "assets/img/companies/lead-05.png",
    "assets/img/companies/lead-06.png"
  ];

}
