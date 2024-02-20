import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
@Component({
  selector: 'app-admins',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent],
  templateUrl: './admins.component.html',
  styleUrl: './admins.component.css'
})
export class AdminsComponent {

}
