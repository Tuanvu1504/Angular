import { Component, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Category } from '../../../../type/category';
import { CategoryService } from '../../../../service/categorises/category.service';

@Component({
  selector: 'app-categorises',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './categorises.component.html',
  styleUrl: './categorises.component.css'
})
export class CategorisesComponent {
categoryService = inject(CategoryService);

cateList  : Category[] = [];

ngOnInit(): void {
  this.categoryService
  .getCategoryListAdmin()
  .subscribe((data) => {
    this.cateList = data
  })
}
handleDeleteCategory(id: string) {
  if (window.confirm('Do you really remove product?')) {
    this.categoryService
      .deleteCategoryById(id)
      .subscribe(
        () =>
          (this.cateList = this.cateList.filter(
            (cate) => cate.id !== id
          ))
      );
  }
}
}
