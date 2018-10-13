import { Component, OnInit } from '@angular/core';
import {isoStringToDate} from '@angular/common/src/i18n/format_date';
import {QrService} from '../../services/qr.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
ar: number[];
  price: number;
price2: number = 0;
product: Product = {
  name: '',
  count: 0,
  itemPrice: 0
};
address: Address = {
  street: '',
  zip: '',
  city: ''
};
seller: Seller = {
  name: '',
  address: null,
  ustIdNr: '',
  storeID: '',
  checkoutLane: 0
};
products: Product[] = [];
invoice: Invoice = {
  date: '',
  billNo: 0,
  seller: null,
  products: [],
  totalCostBrutto: 0,
  totalCostNetto: 0,
  customerPaid: 0,
  tax: 0
};
invoiceData: InvoiceData = {
  invoice: null,
  hash: ''
};
  buyinProcessFinished = false;


  constructor(private qrService: QrService) { }
  //private router: Router;
  ngOnInit() {
  }

  change() {

  }
  submit() {
    this.products.push(this.product);
    this.invoice.totalCostBrutto += this.product.itemPrice * this.product.count;
    this.price = this.invoice.totalCostBrutto;
    this.price2 = this.invoice.customerPaid;
    console.log(this.price2);
    this.resetProduct();
  }

  private resetProduct() {
    this.product = {
      name: '',
      count: 0,
      itemPrice: 0
    };
    this.invoice.customerPaid = 0;
  }

  finishBuyingProcess() {
    this.createInvoice();

    this.qrService.setQRData(JSON.stringify(this.invoiceData));
    console.log(this.invoiceData);
    this.buyinProcessFinished = true;
    //this.router.navigate(['/qr-code']);
  }

   billn: number = Math.floor(Math.random() * (10000 - 100) + 100);


  private createInvoice() {
    this.invoiceData.hash = 'afee217000';
    this.invoiceData.invoice = this.invoice;
    this.address.street = 'Ortenaustraße 14';
    this.address.zip = '77653';
    this.address.city = 'Offenburg';
    this.seller.address = this.address;
    this.seller.name = 'Aldi';
    this.seller.ustIdNr = 'DE1010101100';
    this.seller.storeID = 'DE12345';
    this.seller.checkoutLane = 3;
    this.invoice.seller = this.seller;
    this.invoice.date = new Date().toISOString();
    this.invoice.billNo = this.billn;
    this.invoice.products = this.products;
    this.invoice.tax = 0.19;
    this.invoice.customerPaid = this.price2;
    this.invoice.totalCostNetto = this.invoice.totalCostBrutto - ((this.invoice.totalCostBrutto / (1 + this.invoice.tax)) * this.invoice.tax);
  }
}


export interface InvoiceData {
  invoice: Invoice;
  hash: string;
}

export interface Invoice {
  date: string;
  billNo: number;
  seller: Seller;
  products: Product[];
  totalCostBrutto: number;
  totalCostNetto: number;
  customerPaid: number;
  tax: number;
}

export interface Seller {
  name: string;
  address: Address;
  ustIdNr: string;
  storeID: string;
  checkoutLane: number;
}

export interface Product {
  name: string;
  count: number;
  itemPrice: number;
}

export interface Address {
  street: string;
  zip: string;
  city: string;
}
