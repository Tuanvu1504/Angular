import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProductsComponent } from './pages/admin/admin_product/products/products.component';
import { AdminsComponent } from './layout/admins/admins.component';
import { ProductCreateComponent } from './pages/admin/admin_product/product-create/product-create.component';
import { ProductEditComponent } from './pages/admin/admin_product/product-edit/product-edit.component';
import { ProductDestailComponent } from './components/product-destail/product-destail.component';
import { HomeComponent } from './layout/home/home.component';
import { CategorisesComponent } from './pages/admin/admin_category/categorises/categorises.component';
import { AdminPageComponent } from './pages/admin/admin_product/admin-page/admin-page.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { CateCreateComponent } from './pages/admin/admin_category/cate-create/cate-create.component';
import { CateEditComponent } from './pages/admin/admin_category/cate-edit/cate-edit.component';
import { UserListComponent } from './pages/admin/admin_user/user-list/user-list.component';
import { UserCreateComponent } from './pages/admin/admin_user/user-create/user-create.component';
import { UserEditComponent } from './pages/admin/admin_user/user-edit/user-edit.component';
import { ProductDetailComponent } from './pages/admin/admin_product/product-detail/product-detail.component';
export const routes: Routes = [
  
  {
    path: "",
    component: HomeComponent,
    children: [
      {
        path: "",
        redirectTo: "/home",
        pathMatch: "full",
      },
      {
        path: 'home',
        component: HomepageComponent,

      },

      {
        path: "product_detail/:idPr",
        component: ProductDestailComponent,
      },

    ]
  },

  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "signup",
    component: RegisterComponent,
  },


  {
    path: "admin",
    component: AdminsComponent,
    children: [
      {
        path: '',
        redirectTo: "/admin/products",
        pathMatch: "full"
      },
      
      {
        path: "dashboard",
        component: AdminPageComponent,
      },
      
      {
        path: "products",
        component: ProductsComponent,
      },
      {
        path: "products_create",
        component: ProductCreateComponent,
      },
      {
        path: "products_edit/:id",
        component: ProductEditComponent,
      }, 
      {path:'products_detail/:id',component:ProductDetailComponent},
      
      {
        path: "category",
        component: CategorisesComponent,
      }, {
        path: "category_create",
        component: CateCreateComponent,
      }, {
        path: "category_edit/:id",
        component: CateEditComponent,
      },
      
      {
        path: "user_list",
        component: UserListComponent,
      },
      {
        path: "user_add",
        component: UserCreateComponent,
      },
      {
        path: "user_edit/:id",
        component: UserEditComponent,
      },
    ]
  },
];
