// import { Component } from '@angular/core';
// import { CategoryServiceService } from '../../servises/User/Category/category-service.service';
// import { Category } from '../interface/categoryInterface';
// import { NgClass, NgFor } from '@angular/common';

// @Component({
//   selector: 'app-categories',
//   standalone: true,
//   imports: [NgFor,NgClass],
//   templateUrl: './categories.component.html',
//   styleUrl: './categories.component.css'
// })
// export class CategoriesComponent {
//   headingName: string = 'Favourite Course';
//   subHeading: string = 'Top Category';

//   paragraph: string =
//     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue elementum et neque. Suspendisse imperdiet.';
//   categories: Category[] = [];
//   data: Boolean = false;
//   constructor(private categoryService: CategoryServiceService) {}

//   ngOnInit(): void {
//     this.categoryService.displayCategories().subscribe(
//       (response) => {
//         this.categories ? (this.data = true) : (this.data = false);
//         this.categories = response.data.data;
//         console.log(">>>>>>>>>>>>>>>>>>>>>")
//         console.log(response.data.data)
//         response.data.data.map((item:any) => (
//           this.getCourseOfCategory(item.id)
//         ))


//         console.log('categories', this.categories);
//       },
//       (error) => {
//         console.error('categories error', error);
//       }
//     );
//   }
//   selectedCategory: string = 'graphics'; // Default selected category

//   selectCategory(category: string) {
//     this.selectedCategory = category;
//   }
//   getCourseOfCategory(id:string) {
//     this.categoryService.displayCoursesOfCategory(id).subscribe(

//       (response) => {
//         console.log('courses of categories', response);
//       },
//       (error) => {
//         console.error('categories error', error);
//       }
//     );
//   }
// }
import { Component } from '@angular/core';

import { Category } from '../interface/categoryInterface';
import { NgClass, NgFor } from '@angular/common';
import { CategoryService } from '../../servises/Category/category.service';
import { CategoryServiceService } from '../../servises/User/Category/category-service.service';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  headingName: string = 'Favourite Course';
  subHeading: string = 'Top Category';
  paragraph: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue elementum et neque. Suspendisse imperdiet.';

  categories: Category[] = [];
  data: boolean = false;
  selectedCategory: string = '';
  courses: { [key: string]: any[] } = {};
  constructor(private categoryService: CategoryServiceService) {}

  // ngOnInit(): void {
  //   this.categoryService.displayCategories().subscribe(
  //     (response:any) => {
  //       this.categories = response.data.data;
  //       this.selectedCategory = this.categories.length ? this.categories[0].category_name : ''; // Default to the first category
  //       this.data = true;
  //       response.data.data.map((course:any)=> (
  //         this.getCourseOfCategory(course.id)
  //       ))

  //     },
  //     (error:any) => {
  //       console.error('Error fetching categories', error);
  //     }
  //   );
  // }

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }
  ngOnInit(): void {
    this.categoryService.displayCategories().subscribe(
      (response: any) => {
        this.categories = response.data.data;
        this.selectedCategory = this.categories.length ? this.categories[0].category_name : ''; // Default to the first category
        this.loadCoursesForCategories();
      },
      (error: any) => {
        console.error('Error fetching categories', error);
      }
    );
  }

  loadCoursesForCategories() {
    this.categories.forEach((category:any) => {
      this.getCourseOfCategory(category.id);
    });
  }

  getCourseOfCategory(id: string): void {
    this.categoryService.displayCoursesOfCategory(id).subscribe(
      (response:any) => {
        console.log('Courses of category', response);
        this.courses[id] = response;
      },
      (error:any) => {
        console.error('Error fetching courses for category', error);
      }
    );
  }
}
