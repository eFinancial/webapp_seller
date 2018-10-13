import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { QrCodeComponent } from './qr-code/qr-code.component';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import {QrService} from '../services/qr.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    QrCodeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxQRCodeModule,
    AppRoutingModule
  ],
  providers: [
    QrService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
