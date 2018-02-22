import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ngx-invoice',
    template: `<h1>Hello {{variable}}</h1>
    <router-outlet></router-outlet>`,
    // template: '<router-outlet></router-outlet>',
  })

  export class InvoiceComponent implements OnInit {
    variable: string = "Swap"
    ngOnInit() : void
        {

        }
  }