import { Component,Input, OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product-rate',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-rate.component.html',
  styleUrl: './product-rate.component.css'
})
export class ProductRateComponent {
  @Input() rateInit: number = 0;

  ratePr: number = 0;

  rates: number[] = [1, 2, 3, 4, 5];

  constructor() {}
  ngOnInit(): void {
    this.ratePr = Math.round(this.rateInit);
  }
}
