import {Component, Input} from 'angular2/core';
import {MyDate} from './date';

@Component({
    selector: 'my-app',
    directives: [MyDate],
    template: `<my-date [(date)]="date"></my-date> <br> {{date}} <br>
    <input type="button" name="firstname" (click)="display()" value="Get Date">`
})
export class AppComponent {
    @Input() date: Date;
    constructor() {
       this.date = new Date();
      
    }
    
    display()
    {
      alert(this.date);
    }
}
