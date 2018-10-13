import { Component, OnInit } from '@angular/core';
import {QrService} from '../../services/qr.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
ar: number[];
  price: number;
  price2 = 0;
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
  elementType: 'url' | 'canvas' | 'img' = 'url';
  buyinProcessFinished = false;
  qrValue: string;


  constructor(private qrService: QrService) { }
  ngOnInit() {
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

  resetBuyingProcess() {
    this.resetProducts();
    this.buyinProcessFinished = false;
  }

  finishBuyingProcess() {
    this.createInvoice();
    this.qrValue = JSON.stringify(this.invoiceData);
    this.buyinProcessFinished = true;
  }


  makeid() {
    let text = '';
    const possible = 'abcdef0123456789';

    for (let i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }

  private createInvoice() {
    this.invoiceData.hash = this.makeid();
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
    this.invoice.billNo = Math.floor(Math.random() * (10000 - 100) + 100);
    this.invoice.products = this.products;
    this.invoice.tax = 0.19;
    this.invoice.customerPaid = this.price2;
    this.invoice.totalCostNetto
      = this.invoice.totalCostBrutto - ((this.invoice.totalCostBrutto / (1 + this.invoice.tax)) * this.invoice.tax);
  }

  private resetProducts() {
    this.products = [];
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
