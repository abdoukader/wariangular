import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

import { UserlisteService } from '../userliste.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  
  constructor(private _userServive: UserService ,private _router: Router) { }

  ngOnInit() {
    
   
  }

}
