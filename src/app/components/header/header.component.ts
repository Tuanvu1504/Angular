import { Component } from '@angular/core';
import { CommonModule , NgClass, NgIf } from '@angular/common';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { userLocal } from '../../config/viewLocal';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgFor,RouterLink,NgClass,CommonModule,NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  user:any
  ngOnInit(){
  
   this.user = userLocal.getUserLoacal()
  }
   logOut(){
    userLocal.remove()
    location.href = ''
   }
  
  menuList = [
    {
      label: 'Home',
      link: '/',
    },
    {
      label: 'About Us',
      link: '/about-us',
    },
    {
      label: 'Shop',
      link: '/shop',
    },
    {
      label: 'Contact',
      link: '/concact',
    },
    {
      label: 'Admin',
      link: '/admin',
    },

   
  ]; // NgFor
  navigationHiddenOrShow: boolean = true;

  onClickMenu(): void {
    this.navigationHiddenOrShow = !this.navigationHiddenOrShow;
  }

}
