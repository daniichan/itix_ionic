import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnimedPageRoutingModule } from './unimed-routing.module';

import { UnimedPage } from './unimed.page';
import { ExploreContainerComponent } from './../explore-container/explore-container.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnimedPageRoutingModule
  ],
  declarations: [
    UnimedPage,
    ExploreContainerComponent
  ]
})
export class UnimedPageModule {}
