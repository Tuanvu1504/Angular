import { Injectable , inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product,ProductAdmin,ProductAdd, Categorises } from '../../type/product';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // call api
  // apiUrl = 'https://6523d369ea560a22a4e8e7da.mockapi.io/products';
  apiAdminUrl = 'https://65d367c5522627d50108d3c1.mockapi.io/api/tuanvu/products'; // khai bao apiUrl

  http = inject(HttpClient); // inject bien http
  constructor() {}

  getProductList(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiAdminUrl); //axios.get(apiUrl)
  }
  getDetailProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiAdminUrl}/${id}`);
  }
  getProductsRelatedToCategory(category: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiAdminUrl}/category/${category}`);
  }
  getProductListAdmin(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiAdminUrl); //axios.get(apiUrl)
  }

// getCateListAdmin(): Observable<Categorises[]> {
//     return this.http.get<Categorises[]>(this.apiAdminUrl); //axios.get(apiUrl)
//   }
  deleteProductById(id: number) {
    return this.http.delete(`${this.apiAdminUrl}/${id}`);
  }

  createProduct(product: ProductAdd) {
    return this.http.post<Product>(this.apiAdminUrl, product);
  }

  getDetailProductById(id: string) {
    return this.http.get<ProductAdmin>(`${this.apiAdminUrl}/${id}`);
  }

  updateProductById(product: ProductAdd, id: string) {
    return this.http.put<Product>(`${this.apiAdminUrl}/${id}`, product);
  }
  searchProduct(params:any){
    return this.http.get<any>(`${this.apiAdminUrl}/search`,{params:{title:params}})

  }
  getProductDetail(id: string):Observable<Product>{
    return this.http.get<Product>(`${this.apiAdminUrl}/${id}`)
  }
}
