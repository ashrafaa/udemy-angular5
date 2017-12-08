import { Component } from '@angular/core';

@Component({
  selector: 'assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component {
  textFlag: boolean = false;
  clickArr: Array<number> = [];
  
  onClick(): void {
    this.textFlag = !this.textFlag;
    this.clickArr.push(this.clickArr.length + 1);
  }
}
