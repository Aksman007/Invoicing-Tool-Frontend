import {Component,OnInit} from '@angular/core'
import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';
import {Message,SelectItem} from 'primeng/components/common/api';

@Component({
    selector: 'ngx-schedule',
    templateUrl: './schedule.component.html'
})

export class ScheduleComponent implements OnInit {
     msgs: Message[] = [];

    userform: FormGroup;

    submitted: boolean;

    genders: SelectItem[];

    description: string;

    constructor(private fb: FormBuilder) {}

    ngOnInit() {
        this.userform = this.fb.group({
            'firstname': new FormControl('', Validators.required),
            'lastname': new FormControl('', Validators.required),
            'password': new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
            'description': new FormControl(''),
        });
    }

     onSubmit(value: string) {
         this.submitted = true;
         this.msgs = [];
         this.msgs.push({severity:'info', summary:'Success', detail:'Form Submitted'});
     }

    get diagnostic() { return JSON.stringify(this.userform.value); }
}