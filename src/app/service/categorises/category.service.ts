import { Injectable, inject } from '@angular/core'; // inject
import { HttpClient } from '@angular/common/http'; // HttpClient
import { Observable } from 'rxjs';
import { Category, CategoryAdd } from '../../type/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  apiAdminUrl = 'https://65d367c5522627d50108d3c1.mockapi.io/api/tuanvu/categories'; // khai bao apiUrl
  http = inject(HttpClient); // inject bien http

  constructor() {}

  getCategoryListAdmin(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiAdminUrl); //axios.get(apiUrl)
  }

  createCategory(category: CategoryAdd) {
    return this.http.post<Category>(this.apiAdminUrl, category);
  }
  deleteCategoryById(id: string) {
    return this.http.delete(`${this.apiAdminUrl}/${id}`);
  }
  getDetailCategoryById(id: string) {
    return this.http.get<Category>(`${this.apiAdminUrl}/${id}`);
  }
  updateCategoryById(category: CategoryAdd, id: string) {
    return this.http.put<Category>(`${this.apiAdminUrl}/${id}`, category);
  }
}
