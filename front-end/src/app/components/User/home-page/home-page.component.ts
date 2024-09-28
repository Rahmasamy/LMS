import { Component } from '@angular/core';
import { TopCategoryComponent } from '../top-category/top-category.component';
import { FeaturedCoursesComponent } from '../featured-courses/featured-courses.component';
import { FeaturesComponent } from '../features/features.component';
import { TrendingCoursesComponent } from '../trending-courses/trending-courses.component';
import { TrustCompaniesComponent } from '../trust-companies/trust-companies.component';
import { WantToReadComponent } from '../want-to-read/want-to-read.component';
import { TestmonialsComponent } from '../testmonials/testmonials.component';
import { TransformComponent } from '../transform/transform.component';
import { LatestBlogsComponent } from '../latest-blogs/latest-blogs.component';
import { FooterDashboardComponent } from '../footer-dashboard/footer-dashboard.component';
import { HomePageService } from '../../../servises/homepage/home-page.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    TopCategoryComponent,
    FeaturedCoursesComponent,
    FeaturesComponent,
    TrendingCoursesComponent,
    TrustCompaniesComponent,
    WantToReadComponent,
    TestmonialsComponent,
    TransformComponent,
    LatestBlogsComponent,
    FooterDashboardComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  datacategories: any = [];

  constructor(private HomeService: HomePageService) {
    console.log(this.datacategories)
    this.getcategories()
  }

  getcategories() {
    this.HomeService.getAllCategories().subscribe(
      (response) => {
        console.log('data get successfully', response);
        this.datacategories = response;
      },
      (error) => {
        console.error('data error', error);
      }
    );
  }
}
