import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { AboutProjectComponent } from './about-project/about-project.component';
import { OurGalleryComponent } from './our-gallery/our-gallery.component';
import { BlogComponent } from './blog/blog.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import {NotfoundComponent} from './notfound/notfound.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CurdComponent } from './curd/curd.component';

const routes: Routes = [
 
  { path: 'home', component: HeaderComponent },
  { path: 'about', component: AboutProjectComponent },
  { path: 'portfolio', component: OurGalleryComponent },
  { path: 'blog', component: BlogComponent },
 {path : '404' , component : NotfoundComponent},
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path : 'employeeList', component : EmployeeListComponent},
  {path : 'curd-operation', component: CurdComponent},
  { path: '', redirectTo:'/home', pathMatch:'full' },
  {path : '**', redirectTo : '/404'},

  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
}) 
export class AppRoutingModule { }
