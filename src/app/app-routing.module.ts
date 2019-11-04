import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { AboutProjectComponent } from './about-project/about-project.component';
import { OurGalleryComponent } from './our-gallery/our-gallery.component';
//import { OurFeatureComponent } from './our-feature/our-feature.component';
import { BlogComponent } from './blog/blog.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
//import { FooterComponent } from './footer/footer.component';
//import { AppRoutingModule } from './app-routing.module';
import {NotfoundComponent} from './notfound/notfound.component';
const routes: Routes = [
  { path: '', redirectTo:'/home', pathMatch:'full' },
  { path: 'home', component: HeaderComponent },
  { path: 'about', component: AboutProjectComponent },
  { path: 'portfolio', component: OurGalleryComponent },
  { path: 'blog', component: BlogComponent },
 // { path: 'External', component: HeroesComponent },
 {path : '404' , component : NotfoundComponent},
  { path: 'contact-us', component: ContactUsComponent },
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
