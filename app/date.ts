import {Component, Input, Output, EventEmitter,OnInit} from 'angular2/core';
import {NgFor, NgModel} from 'angular2/common';
@Component({
    selector: 'my-date',
    events: ['dateChange'],
    template: '<input type="date" [value] = "_date" (change) = "onDateChange($event.target.value)" />',
    styleUrls:['styles.css']
})
export class MyDate{
    private _date: string;
    @Input() set date(d: Date) {
        this._date = this.toDateString(d);
    }
    @Output() dateChange: EventEmitter<Date>;
    constructor() {
        this.date = new Date();
        this.dateChange = new EventEmitter();       
    }

    private toDateString(date: Date): string {
      
      return (date.getFullYear().toString() + '-' + ("0" + (date.getMonth() + 1)).slice(-2) + '-' + ("0" + (date.getDate())).slice(-2));
     
    }

    private parseDateString(date:string): Date {     
       var parts = date.split('-');     
      return new Date(+parts[0],+parts[1]-1, +parts[2]); // Note: months are 0-based

    }

    private onDateChange(value: string): void {
        if (value != this._date) {
            
            
            var parsedDate = this.parseDateString(value);
            
            // check if date is valid first
            if (parsedDate.getTime() != NaN) {
               this._date = value;
               this.dateChange.emit(parsedDate);
            }
        }
    }
}
