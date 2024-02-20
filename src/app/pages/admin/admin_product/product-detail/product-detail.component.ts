import { Component,inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../../service/Product/product.service';
import { Product } from '../../../../type/product';
@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  route = inject(ActivatedRoute);
  productService = inject(ProductService);
  ProductId = '';
  ProductDetail!:Product;
  ngOnInit(){
    this.route.params.subscribe((param) => {
        this.ProductId = param['id'];
        this.productService.getProductDetail(this.ProductId).subscribe((product)=> {
          this.ProductDetail = product;
        })
      });
    }
}
