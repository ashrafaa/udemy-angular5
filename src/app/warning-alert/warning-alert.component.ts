import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `
  <p>You are so in danger!!!</p>
  `,
  styles: [`
  p {
    padding: 20px;
    background-color: red;
    color: white;
  }
  `],
})
export class WarningAlertComponent {
}
