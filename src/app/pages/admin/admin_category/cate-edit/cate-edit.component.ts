import { Component , inject} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../../../service/categorises/category.service';
import { CategoryAdd } from '../../../../type/category';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-cate-edit',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './cate-edit.component.html',
  styleUrl: './cate-edit.component.css'
})
export class CateEditComponent {
  cateId: string = "";
  cateEdit: CategoryAdd = {
    category: '',
    
  };
  categoryService = inject(CategoryService); // inject vao bien
  router = inject(Router); // inject

  constructor(private route: ActivatedRoute) {}


ngOnInit(){
  this.route.params.subscribe((param) => {
    this.cateId = param['id']
    
  });
  if (!this.cateId) return;
  
  this.categoryService
    .getDetailCategoryById(this.cateId)
    .subscribe(
      (cate) =>
        (this.cateEdit = { ...cate })
    );
}
  
  handleSubmit() {
    if (!this.cateId) return;
    this.categoryService
      .updateCategoryById(this.cateEdit, this.cateId)
      .subscribe(() => this.router.navigate(['/admin/category']));
    // call service api POST products
  }
}
