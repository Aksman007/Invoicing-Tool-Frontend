import { NgModule } from '@angular/core';
import { InputTextModule, InputTextareaModule, GrowlModule, DropdownModule, MultiSelectModule, ButtonModule, DataTableModule, DialogModule, FileUploadModule, PanelModule } from 'primeng/primeng'

@NgModule({
    imports: [
        GrowlModule,        
        InputTextModule,
        InputTextareaModule,
        DropdownModule,
        MultiSelectModule,
        ButtonModule,
        DataTableModule,
        DialogModule,
        FileUploadModule,
        PanelModule
    ],
    
})
export class PrimeNgModule 
{

}