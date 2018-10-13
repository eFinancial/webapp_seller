import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { QrCodeComponent } from './qr-code/qr-code.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'qr-code', component: QrCodeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ],


})
export class AppRoutingModule {

}
