import { Component ,input,Input} from '@angular/core';

@Component({
  selector: 'app-headerofcontent',
  standalone: true,
  imports: [],
  templateUrl: './headerofcontent.component.html',
  styleUrl: './headerofcontent.component.css'
})
export class HeaderofcontentComponent {
  @Input() headingName: string = '';
  @Input() subHeading: string = '';
  @Input() All: string = '';
  @Input() paragraph:string=''
}
