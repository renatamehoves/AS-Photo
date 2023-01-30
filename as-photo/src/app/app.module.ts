import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GalleryComponent } from './Pages/gallery/gallery.component';
import { ContactUsComponent } from './Pages/contact-us/contact-us.component';
import { HomeComponent } from './Pages/home/home.component';
import { MaincarrouselComponent } from './Components/maincarrousel/maincarrousel.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { BlogComponent } from './Pages/blog/blog.component';
import { BioComponent } from './Pages/bio/bio.component';
import { TeamComponent } from './component/team/team.component';
import { CardsComponent } from './component/cards/cards.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    PageNotFoundComponent,
    GalleryComponent,
    ContactUsComponent,
    HomeComponent,
    NavbarComponent,
    BlogComponent,
    BioComponent,
    TeamComponent,
    CardsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MaincarrouselComponent
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
