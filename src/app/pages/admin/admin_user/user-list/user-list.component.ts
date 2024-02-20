import { Component ,inject} from '@angular/core';
import { NgFor,TitleCasePipe } from '@angular/common';
import { ActivatedRoute,Router,RouterLink } from '@angular/router';
import { UserService } from '../../../../service/User/user.service';
import { User } from '../../../../type/User';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [NgFor, FormsModule,RouterLink,TitleCasePipe],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
userService = inject(UserService);
toast = inject(ToastrService)
route = inject(ActivatedRoute);
router = inject(Router);  
listUser:User[] = []
constructor(){}
ngOnInit(){
this.userService.getAllUsers().subscribe((response)=> this.listUser = response)
}


deleteUser(id:string){
  const cf = confirm("Bạn có chắc chắn muốn xóa tài khoản này")
  if(cf){
    this.userService.deleteUsers(id).subscribe((response)=> {
      this.toast.success(response.message)
      this.listUser = this.listUser.filter(user => user._id !== id)
    })
  }
}
}

