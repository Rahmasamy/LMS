import { Component } from '@angular/core';
import { TopCategoryComponent } from '../featured-courses/top-category/top-category.component';
import { FeaturedCoursesComponent } from '../featured-courses/featured-courses.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [TopCategoryComponent,FeaturedCoursesComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
