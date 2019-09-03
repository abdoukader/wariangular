import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from './models/user';
import { UserlisteService } from '../userliste.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users :User[];
  constructor(private _userServive: UserlisteService ,private _router: Router) { }

  ngOnInit() {
    
    this._userServive.getUser()
    .subscribe(res =>  {
        this.users = res
        console.log(res)
      },
      err => console.log(err)
    );
  }

}
