import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutProjectComponent } from './about-project/about-project.component';
import { OurGalleryComponent } from './our-gallery/our-gallery.component';
import { OurFeatureComponent } from './our-feature/our-feature.component';
import { BlogComponent } from './blog/blog.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { NavigationComponent } from './navigation/navigation.component';
import {ConfigService} from './config.service';
import { NotfoundComponent } from './notfound/notfound.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
// import { PagerComponent } from './pager/pager.component';
// import { PaginationComponent } from './pagination/pagination.component';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import { EmployeeListComponent } from './employee-list/employee-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutProjectComponent,
    OurGalleryComponent,
    OurFeatureComponent,
    BlogComponent,
    ContactUsComponent,
    FooterComponent,
    NavigationComponent,
    NotfoundComponent,
    SignupComponent,
    LoginComponent,
    EmployeeListComponent,
    // PagerComponent,
    // PaginationComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,
    FormsModule,  ReactiveFormsModule,AppRoutingModule
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
