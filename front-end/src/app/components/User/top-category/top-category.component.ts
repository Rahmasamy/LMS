import { Component } from '@angular/core';
import { HeaderofcontentComponent } from '../../headerofcontent/headerofcontent.component';
import { HomePageService } from '../../../servises/homepage/home-page.service';

@Component({
  selector: 'app-top-category',
  standalone: true,
  imports: [HeaderofcontentComponent],
  templateUrl: './top-category.component.html',
  styleUrl: './top-category.component.css',
})
export class TopCategoryComponent {
  headingName: string = 'Favourite Course';
  subHeading: string = 'Top Category';
  All: string = 'All Categories';
  paragraph: string =
    'Lorem ipsum dolor sit amet,consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue elementum et neque. Suspendisse imperdiet.';
  datacategories: any = [];

  constructor(private HomeService: HomePageService) {
    console.log(this.datacategories);
    this.getcategories();
  }

  getcategories() {
    this.HomeService.getAllCategories().subscribe(
      (response) => {
        console.log('data get successfully', response);
        this.datacategories = response.data;
      },
      (error) => {
        console.error('data error', error);
      }
    );
  }
}
