import { Component, inject } from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product} from '../../../../type/product';
import { Categorises } from '../../../../type/product';
import { ProductService } from '../../../../service/Product/product.service'; // import services
import { CategoryService } from '../../../../service/categorises/category.service';
import { DescriptionPipe } from '../../../../pipes/description.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor, DescriptionPipe, RouterLink,NgIf,NgClass, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  constructor(){}
  route = inject(Router);
  toast = inject(ToastrService);
  router = inject(ActivatedRoute);
  productService = inject(ProductService); // inject vao bien
  categoryService = inject(CategoryService); // inject
  paramsUrl = {}
  dropdowns = false
  productList: Product[] = [];
  categoryAll: Categorises[] = []
  productAdd = {
    title: '',
    price: 0,
    description: '',
    image: '',
    rate: 0,
    category: '',
  };

  ngOnInit(): void {
    this.productService
      .getProductListAdmin()
      .subscribe((products) => {
        this.productList = products;
      });
      this.categoryService.getCategoryListAdmin().subscribe((category) => {
        this.categoryAll = category;
      })
      
  }

  
  dropDown(){
    
    if(this.dropdowns == false){
      this.dropdowns = true
    }else{
      this.dropdowns = false
    }
  }
  handleDeleteProduct(id: number) {
    if (window.confirm('Do you really remove product?')) {
      this.productService
        .deleteProductById(id)
        .subscribe(
          () =>
            (this.productList = this.productList.filter(
              (product) => product.id !== id
            ))
        );
    }
  }
}
