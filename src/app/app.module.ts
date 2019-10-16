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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutProjectComponent,
    OurGalleryComponent,
    OurFeatureComponent,
    BlogComponent,
    ContactUsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
