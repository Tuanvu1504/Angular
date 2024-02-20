import { Component,inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '../../service/User/user.service';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  toast =inject(ToastrService)
  userService = inject(UserService)
  router = inject(Router)
  confirmPassword=''
  errorConfimPass = false
  fomrRegister = {
    name:'',
    email:'',
    password:'',
    role: 'member'
  }
  onSubmit(loginForm:any){
    if(loginForm.valid){
      if(this.fomrRegister.password === this.confirmPassword){
        this.userService.register(this.fomrRegister).subscribe((response)=>{
          this.toast.success(response.message)
          this.router.navigateByUrl('/login')
        },error=>{
          this.toast.error(error.message)
        })
      }else{
        this.errorConfimPass=true
      }
      
    }
  }
}
