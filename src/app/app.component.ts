import { Component, OnInit } from '@angular/core';
import { User } from './user/user.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    users: User[];

    constructor() {
        // init users
        this.users = this.mockUsers();
    }

    ngOnInit() {
        setTimeout(() => {
            this.users = this.mockUsers();
        }, 5000);
    }
    trackByFn(index, item) {
        return item.id;
    }

    private mockUsers() {
        const users: User[] = [];
        const cnt = Math.floor(Math.random() * 100);
        for (let i = 0; i < cnt; i ++) {
            users.push(new User(i));
        }
        return users;
    }
}
