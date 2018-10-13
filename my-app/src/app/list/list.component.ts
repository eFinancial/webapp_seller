import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  gBetrag = 1 + 1;
  name = '';
  constructor() { }

  ngOnInit() {
  }

  change() {
    console.log(1);
  }
}
