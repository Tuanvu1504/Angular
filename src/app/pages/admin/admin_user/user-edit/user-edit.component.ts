import { Component ,inject} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common'; 
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute,Router } from '@angular/router';
import { UserService } from '../../../../service/User/user.service';
import { User } from '../../../../type/User';

@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.css'
})
export class UserEditComponent {
  toast = inject(ToastrService)
  userService = inject(UserService)
  router = inject(ActivatedRoute);
  routerLocation = inject(Router)
  user!:User
  idUser=''
  ngOnInit(){
    this.router.params.subscribe((param)=>{
      this.idUser = param['id']
      this.userService.getUserDetail(this.idUser).subscribe((response)=>{
        this.user = response
        this.formData = {
          name:this.user.name,
          email:this.user.email,
          role:this.user.role,
        }
      })
    })
  }
  formData = {
    name:'',
    email:'',
    role:'',
  }
  
  onSubmit(userForm:any){
    if(userForm.valid){
      if(userForm.valid){
        this.userService.updateUser(this.formData,this.idUser).subscribe((response)=>{
          this.toast.success(response.message);
          this.routerLocation.navigateByUrl('/admin/user_list')
        },error=>{
          this.toast.error(error.message);
        }
        )
      }
    }
  }
}
