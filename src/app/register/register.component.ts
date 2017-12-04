import { Component } from '@angular/core';

@Component ({
    selector: 'register',
    templateUrl: 'register.component.html',
    styleUrls: ['register.component.css']
})
export class RegisterComponent {
    username: string = '';
    age: string = '';
    allChecked: boolean = false;
    checkText: string = 'User registered!';
    camp: string = '';

    constructor() {
        this.camp = Math.random() > 0.5 ? 'red': 'blue';
    }

    checkIfEmpty(): boolean {
        if (this.username) return true
        else return false;
    }

    checkAge(): string {
        let ageCheck: string = '';
        if (parseInt(this.age) < 22) ageCheck = `${this.age} is too young!`;
        return ageCheck;
    }

    onClick(): void {
        this.allChecked = true;
        this.username = '';
        this.age = '';
    }
}