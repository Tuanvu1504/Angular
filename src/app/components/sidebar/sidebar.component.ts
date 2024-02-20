import { Component,Inject,inject } from '@angular/core';
import { RouterLink, Router} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf, SlicePipe } from '@angular/common';
import { Subject, debounceTime } from 'rxjs';
import { ProductService } from '../../service/Product/product.service';
import { Product } from '../../type/product';
import { log } from 'console';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, FormsModule, SlicePipe,NgFor,NgIf],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  productService = inject(ProductService)
  ProductSevice = inject(ProductService)
  productList:Product[] = []
  textSearch:string = ''
  private searchSubject = new Subject<string>();
  router = inject(Router)
  listSearch:Product[] = []
  ngOnInit() {
    this.productService
      .getProductListAdmin()
      .subscribe((products) => {
        this.productList = products;
      });
    // Thêm debounceTime để chờ 1000ms (1 giây) trước khi gọi tới API
    this.searchSubject.pipe(debounceTime(1000)).subscribe(() => {
      if(this.textSearch && this.productList.length >0){
       this.listSearch = this.productList.filter((item) => item.title.includes(this.textSearch));
       console.log(this.listSearch);
       
      }else{
        this.listSearch = []
      }
    });
  }
  onChangeSearch(){
    this.searchSubject.next(this.textSearch)
  }
 
}
