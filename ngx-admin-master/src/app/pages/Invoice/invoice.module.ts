import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { InvoiceRoutingModule, routedComponents } from './invoice-routing.module';

@NgModule({
    declarations:[ ...routedComponents ],
    providers: [],
    imports: [
        ThemeModule,
        InvoiceRoutingModule
    ],
    bootstrap: []
})

export class InvoiceModule 
{

}