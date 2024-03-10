import { NgModule } from '@angular/core';
import { CommonModule } from '../common/common.module';
import { HomeComponent } from './Home/home.component';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    AboutComponent
  ]
})
export class PagesModule { }
