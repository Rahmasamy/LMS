import { Component } from '@angular/core';
import { HeaderofcontentComponent } from '../../headerofcontent/headerofcontent.component';
import { FeaturedInstructorsComponent } from '../featured-instructors/featured-instructors.component';

@Component({
  selector: 'app-featured-courses',
  standalone: true,
  imports: [HeaderofcontentComponent,FeaturedInstructorsComponent],
  templateUrl: './featured-courses.component.html',
  styleUrl: './featured-courses.component.css'
})
export class FeaturedCoursesComponent {
  headingName: string = 'What is New';
  subHeading: string = 'Featured Courses';
  All: string = 'All Categories';
  paragraph:string='Lorem ipsum dolor sit amet,consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue elementum et neque. Suspendisse imperdiet.'
}
