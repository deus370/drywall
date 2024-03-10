import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule as AngularCommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule, matMenuAnimations} from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';




@NgModule({
  declarations: [],
  imports: [
    AngularCommonModule,
    MatButtonModule,
  ],
  exports: [
    AngularCommonModule,
    BrowserModule,
    BrowserAnimationsModule,

    MatToolbarModule,
		MatSlideToggleModule,
		MatIconModule,
		MatMenuModule,
  ]
})
export class CommonModule { }
