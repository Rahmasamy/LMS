import { Component } from '@angular/core';
import { HeaderofcontentComponent } from '../../headerofcontent/headerofcontent.component';
import { FeaturedInstructorsComponent } from '../featured-instructors/featured-instructors.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-trending-courses',
  standalone: true,
  imports: [HeaderofcontentComponent,FeaturedInstructorsComponent,NgFor],
  templateUrl: './trending-courses.component.html',
  styleUrl: './trending-courses.component.css'
})
export class TrendingCoursesComponent {
 

  headingName: string = 'What is New';
  subHeading: string = 'TRENDING COURSES';
  All: string = 'All Courses';
  paragraph:string='Lorem ipsum dolor sit amet,consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue elementum et neque. Suspendisse imperdiet.'
}
