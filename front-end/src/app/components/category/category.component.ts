import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InstructorSerService } from '../../servises/User/InstructorFolder/instructor-ser.service';
import { UsernowService } from '../../servises/userNow/usernow.service';
import { CategoryService } from '../../servises/Category/category.service';
import { NotificationService } from '../../services/notification.service';
@Component({
  selector: 'app-category',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

  InstructorId:string=''
  categoryForm: FormGroup;

  constructor(private fb: FormBuilder,
    private userService:UsernowService,
    private CategoryService:CategoryService,
    private notificationService:NotificationService,
    private instructorService:InstructorSerService) {
    this.categoryForm = this.fb.group({
      category_name: ['', Validators.required],
      inst_id: [''],
      image_path: ['', Validators.required]
    });
    this. getDataOfloggedUser()
  }

  getDataOfInstructorByUserId(id:string){
    this.instructorService.getInstructorByUserId(id).subscribe(
      (response:any) => {
         console.log("instructor data");
        console.log(response.id)
        this.InstructorId=response.id
        this.categoryForm.patchValue({ inst_id: this.InstructorId });

      },
      (error) => {
        console.error('courses error', error);
      }
    )
  }
  getDataOfloggedUser(){
    this.userService.getDataOfloggedUser().subscribe(
     (response:any)=> {
      console.log("loggged data ........")
       console.log(response)
      console.log("Response",response.id);
      this.getDataOfInstructorByUserId(response.id);

     },
     (error:any) => {
       console.error('courses error', error);
     }
    )
   }
  ngOnInit(): void {}

  submitForm() {
    if (this.categoryForm.valid) {
      console.log('Form Data:', this.categoryForm.value);
      this.CategoryService.AddCategory(this.categoryForm.value).subscribe(
        (response)=> {
           console.log(response);
           this.notificationService.showSuccess(
            `You have successfully add the Category.`,
            'Adding Category Successfully'
          )
        },
        (error)=>{
          this.notificationService.showError(
            `You failed adding the Category.`,
            'Adding Category Failed'
          )
        }
      )
    } else {
      console.log('Form is not valid');
    }
  }
}
