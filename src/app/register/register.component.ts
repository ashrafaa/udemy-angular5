import { Component } from '@angular/core';

@Component ({
    selector: 'register',
    templateUrl: 'register.component.html',
    styleUrls: ['register.component.css']
})
export class RegisterComponent {
    username: string = '';
    age: string = '';

    constructor() {
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
        this.username = '';
        this.age = '';
    }
}