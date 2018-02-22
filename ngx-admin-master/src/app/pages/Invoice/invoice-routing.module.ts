import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvoiceComponent } from './invoice.component';


const routes: Routes = [{
    path: '',
    component: InvoiceComponent,
    // children: [{
    //   path: 'Schedule',
    //   component: FormInputsComponent,
    // }],
  }];

  @NgModule({
    imports: [
      RouterModule.forChild(routes),
    ],
    exports: [
      RouterModule,
    ],
  })

  export class InvoiceRoutingModule {

  }

  export const routedComponents = [
    InvoiceComponent,
    // FormInputsComponent,
    // FormLayoutsComponent,
  ];