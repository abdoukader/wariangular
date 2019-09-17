import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  isSuperAdmin(){
    return this.auth.isSuperAdmin();
  }

  isAdmin(){
    return this.auth.isAdmin();
  }
  isUser(){
    return this.auth.isUser();
  }
  isCaissier(){
    return this.auth.isCaissier();
  }
  isAuthentification(){
    return this.auth.isAuthentification();
  }
}
