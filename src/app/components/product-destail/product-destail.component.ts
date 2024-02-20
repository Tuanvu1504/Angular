import { Component , OnInit} from '@angular/core';
import { Product } from '../../type/product';
import { ProductService } from '../../service/Product/product.service';
import { ActivatedRoute } from '@angular/router';
import { ProductRateComponent } from '../product-rate/product-rate.component';

@Component({
  selector: 'app-product-destail',
  standalone: true,
  imports: [ProductRateComponent],
  templateUrl: './product-destail.component.html',
  styleUrl: './product-destail.component.css'
})
export class ProductDestailComponent implements OnInit {

productID : number = 0;

productsRelated: Product[] = [];
productsAll: Product[] = [];

product: Product = {
  id: 0,
  title: "",
  image: "",
  category: "",
  description: "",
  price: 0,
  rate: 0,
}

constructor(private ProductService: ProductService, private route: ActivatedRoute) { }
  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      const idPr  = params.get('idPr');
      this.productID = Number(idPr);
    });

    this.ProductService.getDetailProduct(this.productID).subscribe(data => {
      this.product = data;
    })
  }

}
