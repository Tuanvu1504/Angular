import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from '../../../../type/category';
import { ProductService } from '../../../../service/Product/product.service';
import { NgFor } from '@angular/common';
import { CategoryService } from '../../../../service/categorises/category.service';
@Component({
  selector: 'app-product-create',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css'
})
export class ProductCreateComponent {
  categoryService = inject(CategoryService); 
  productService = inject(ProductService); 
  router = inject(Router);
  
  productAdd = {
    title: '',
    price: 0,
    description: '',
    image: '',
    rate: 0,
    category: '',
  };
  categoryList: Category[] = [];

  ngOnInit(): void {
    this.categoryService
      .getCategoryListAdmin()
      .subscribe((categories) => (this.categoryList = categories)); 
  }
  handleSubmit() {
    this.productService
      .createProduct(this.productAdd)
      .subscribe(() => this.router.navigate(['/admin/products']));

  }
}
