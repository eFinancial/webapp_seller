import { Component, OnInit } from '@angular/core';
import {QrService} from '../../services/qr.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.css']
})
export class QrCodeComponent implements OnInit {

  elementType: 'url' | 'canvas' | 'img' = 'url';
  qrValue = '';
  constructor(private qrService: QrService) { }
 // private router: Router;

  ngOnInit() {

  }



}
