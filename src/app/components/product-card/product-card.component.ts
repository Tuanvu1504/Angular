import { Component,Input } from '@angular/core';
import { DescriptionPipe } from '../../pipes/description.pipe';
import { ProductRateComponent } from '../product-rate/product-rate.component';
@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [DescriptionPipe, ProductRateComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() productChild: any;
}
