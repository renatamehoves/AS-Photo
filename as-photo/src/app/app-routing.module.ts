import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BioComponent } from './component/bio/bio.component';
import { TeamComponent } from './component/team/team.component';
import { MainComponent } from './main/main.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { BlogComponent } from './Pages/blog/blog.component';
import { ContactUsComponent } from './Pages/contact-us/contact-us.component';
import { GalleryComponent } from './Pages/gallery/gallery.component';
import { HomeComponent } from './Pages/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full'},
  { path: 'main', component: MainComponent, children: [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'gallery', component: GalleryComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'bio', component: BioComponent},
    {path: 'team', component: TeamComponent,}
  ]},
  {path: 'contact-us', component: ContactUsComponent},
  { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
