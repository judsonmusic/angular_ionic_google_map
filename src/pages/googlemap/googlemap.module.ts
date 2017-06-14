import { AgmCoreModule } from 'angular2-google-maps/core';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GooglemapPage } from './googlemap';

@NgModule({
  declarations: [
    GooglemapPage,
  ],
  imports: [
    AgmCoreModule,
    IonicPageModule.forChild(GooglemapPage),
  ],
  exports: [
    GooglemapPage
  ]
})
export class GooglemapPageModule {}
