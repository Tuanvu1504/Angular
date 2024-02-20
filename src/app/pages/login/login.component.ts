import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../service/User/user.service';
import { userLocal } from '../../config/viewLocal';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,FormsModule,NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  router = inject(Router)
  toastr = inject(ToastrService)
  userService = inject(UserService)
  fomrLogin = {
    email:'',
    password:''
  }
  onSubmit(loginForm:any){
    if(loginForm.valid){
      this.userService.login(this.fomrLogin).subscribe((response)=>{
        userLocal.setUserLocal({user:response.user, accessToken:response.accessToken})
        this.toastr.success(response.message)
        if(response.user.role == 'member'){
          this.router.navigateByUrl('/')
        }else{
          this.router.navigateByUrl('/admin/dashboard')
        }
      })

    }
  }

}
