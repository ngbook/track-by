import { Component, Input } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'user-item',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

    @Input()
    data: User;

}
