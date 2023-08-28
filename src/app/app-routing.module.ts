import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path: "", redirectTo: 'main', pathMatch: 'full'},
  {path: "main", component: MainComponent},
  {path: "about", component: AboutMeComponent},
  {path: "blog", component: BlogComponent},
  {path: "contact", component: ContactComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
