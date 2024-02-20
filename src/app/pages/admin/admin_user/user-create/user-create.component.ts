import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Register } from '../../../../type/User';
import { UserService } from '../../../../service/User/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-create',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './user-create.component.html',
  styleUrl: './user-create.component.css'
})
export class UserCreateComponent {
  toast = inject(ToastrService)
  routerLodation = inject(Router)
  userService = inject(UserService)
formData:Register = {
  name:'',
  email:'',
  role:'',
  password:''
}

onSubmit(userForm:any){
  if(userForm.valid){
    this.userService.register(this.formData).subscribe((response)=>{
      this.toast.success(response.message);
      this.routerLodation.navigateByUrl('/admin/user_list')
    },error=>{
      this.toast.error(error.error.message)
    }
    )
  }
}
}
