import { Component,inject} from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { NgFor } from '@angular/common';
import { ProductService } from '../../service/Product/product.service';
import { Product } from '../../type/product';
@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ProductCardComponent, NgFor],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  productService = inject(ProductService);
  productList: Product[] = [];

  ngOnInit(): void {
    this.productService
      .getProductList()
      .subscribe((products) => (this.productList = products)); // callApi.then(cb fuc)
  }
  //contruct

}
