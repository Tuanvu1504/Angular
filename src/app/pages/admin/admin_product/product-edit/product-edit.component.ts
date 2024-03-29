import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../../service/Product/product.service'; // import services
import { ProductAdd } from '../../../../type/product';
import { CategoryService } from '../../../../service/categorises/category.service';
import { NgFor } from '@angular/common';
import { Category } from '../../../../type/category';
@Component({
  selector: 'app-product-edit',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css'
})
export class ProductEditComponent {
  productId: string = "";

  productEdit: ProductAdd = {
    title: '',
    price: 0,
    description: '',
    category: '',
    image: '',
    rate: 0,
  };

  categoryService = inject(CategoryService); // inject vao bien
  productService = inject(ProductService); // inject vao bien
  router = inject(Router);

  route = inject(ActivatedRoute);
  categoryList: Category[] = [];

  ngOnInit(): void {
    this. categoryService
      .getCategoryListAdmin()
      .subscribe((categories) => (this.categoryList = categories));
    // Lay ProductId From Url
    this.route.paramMap.subscribe((param) => {
      this.productId = String(param.get("id"));
      console.log(this.productId);
      
      return this.getProductDetail();
    });
  }

  getProductDetail() {
    if (!this.productId) return;
    this.productService
      .getDetailProductById(this.productId)
      .subscribe(
        (product) =>
          (this.productEdit = { ...product, category: product.category.id })
      );
  }

  handleSubmit() {
    if (!this.productId) return;
    this.productService
      .updateProductById(this.productEdit, this.productId)
      .subscribe(() => this.router.navigate(['/admin/products']));
    // call service api POST products
  }
}
