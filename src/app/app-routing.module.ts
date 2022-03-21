import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProductsComponent } from './components/products/products.component';
import { BagComponent } from './components/bag/bag.component';
import { SinglePageComponent } from './components/single-page/single-page.component';



const routes: Routes = [
  {path: '', redirectTo:'login' , pathMatch: 'full'},
  //{path: 'welcome', component: WelcomePageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup' , component:SignupComponent},
  {path: 'products' , component:ProductsComponent},
  {path: 'bag' , component:BagComponent},
  {path: 'single/:id', component:SinglePageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
