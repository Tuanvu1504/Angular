import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from '../../../../service/categorises/category.service';
import { NgFor } from '@angular/common';
import { Category } from '../../../../type/category';
@Component({
  selector: 'app-cate-create',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './cate-create.component.html',
  styleUrl: './cate-create.component.css'
})
export class CateCreateComponent {

  categoryService = inject(CategoryService);
  router = inject(Router);

  categoryAdd ={
    category: '',
  }

  // cateList: Category[] = [];

  // ngOnInit(): void {
  //   this.categoryService
  //   .getCategoryListAdmin()
  //   .subscribe((category) => (this.cateList = category))
  // }

  handleSubmit() {
    this.categoryService
      .createCategory(this.categoryAdd)
      .subscribe(() => this.router.navigate(['/admin/category']));
    // call service api POST products
  }
}
