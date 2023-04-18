import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';


import { CoolHeaderComponent } from './cool-header/cool-header.component';

@NgModule({
  declarations: [
    CoolHeaderComponent
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot()
  ],
  exports: [
    CoolHeaderComponent
  ]
})
export class ComponentsModule {}
