import { Component, OnInit } from '@angular/core';
import { HeaderofcontentComponent } from '../../headerofcontent/headerofcontent.component';
import { CategoryServiceService } from '../../../servises/User/Category/category-service.service';
import { Category } from '../../interface/categoryInterface';
import { NgFor, NgIf } from '@angular/common';
import { LoadingComponent } from '../../pages/loading/loading.component';

import { HomePageService } from '../../../servises/homepage/home-page.service';


@Component({
  selector: 'app-top-category',
  standalone: true,
  imports: [HeaderofcontentComponent, NgFor, NgIf, LoadingComponent],
  templateUrl: './top-category.component.html',
  styleUrl: './top-category.component.css',
})

export class TopCategoryComponent implements OnInit {
  headingName: string = 'Favourite Course';
  subHeading: string = 'Top Category';
  all: string = 'All Categories';
  paragraph: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue elementum et neque. Suspendisse imperdiet.';
  categories: Category[] = [];
  data: Boolean = false;
  constructor(private categoryService: CategoryServiceService) {}

  ngOnInit(): void {
    this.categoryService.displayCategories().subscribe(
      (response) => {
        this.categories ? (this.data = true) : (this.data = false);
        this.categories = response.data.data;

        console.log('categories', this.categories);
      },
      (error) => {
        console.error('categories error', error);
      }
    );
  }
  // getCourseOfCategory() {
  //   this.categoryService.displayCoursesOfCategory().subscribe(

  //     (response) => {
  //       console.log("hhhhhhhhhhhh");
  //       console.log('categories', response);
  //     },
  //     (error) => {
  //       console.error('categories error', error);
  //     }
  //   );
  // }
}
