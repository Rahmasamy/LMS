import { Component ,input,Input} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-headerofcontent',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './headerofcontent.component.html',
  styleUrl: './headerofcontent.component.css'
})
export class HeaderofcontentComponent {
  @Input() headingName: string = '';
  @Input() subHeading: string = '';
  @Input() paragraph:string=''
}
