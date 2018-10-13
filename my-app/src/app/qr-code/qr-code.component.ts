import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.css']
})
export class QrCodeComponent implements OnInit {

  elementType: 'url' | 'canvas' | 'img' = 'url';
  qrValue = '';
  constructor() { }
 // private router: Router;

  ngOnInit() {

  }



}
