import { Component } from '@angular/core';
import { HeaderofcontentComponent } from '../../headerofcontent/headerofcontent.component';

@Component({
  selector: 'app-top-category',
  standalone: true,
  imports: [HeaderofcontentComponent],
  templateUrl: './top-category.component.html',
  styleUrl: './top-category.component.css'
})
export class TopCategoryComponent {
   headingName: string = 'Favourite Course';
   subHeading: string = 'Top Category';
   All: string = 'All Categories';
   paragraph:string='Lorem ipsum dolor sit amet,consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue elementum et neque. Suspendisse imperdiet.'
}
