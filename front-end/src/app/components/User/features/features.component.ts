import { Component } from '@angular/core';
import { HeaderofcontentComponent } from '../../headerofcontent/headerofcontent.component';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [HeaderofcontentComponent],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {
  headingName: string = 'What is New';
  subHeading: string = 'Master the skills to drive your career';
  All: string = 'All Categories';
  paragraph:string='Get certified, master modern tech skills, and level up your career — whether you’re starting out or a seasoned pro. 95% of eLearning learners report our hands-on content directly helped their careers.'
}
