import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { InvoiceComponent } from './invoice.component';
import { ThemeModule } from '../../../@theme/theme.module';

@NgModule({
    declarations:[InvoiceComponent],
    providers: [],
    imports: [ThemeModule],
    bootstrap: []
})

export class InvoiceModule 
{

}