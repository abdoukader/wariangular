import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../user.service';
import { User } from './models/user';
import { Router } from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface User{
  username:string;
  roles:string;
  nom:string;
  prenom:string;
  tel:string;
  mail:string;
  statut:string;
  adresse:string;
}

@Component({
  selector: 'app-listeusers',
  templateUrl: './listeusers.component.html',
  styleUrls: ['./listeusers.component.scss']
})
export class ListeusersComponent implements OnInit {

  displayedColumns: string[] = ['username','roles','nom','prenom','tel','mail','statut','adresse'];
  dataSource: MatTableDataSource<User>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  users = [];

  constructor(private _userService: UserService ,private _router: Router) { }

  ngOnInit() {
    this._userService.getUser()
    .subscribe(
      res => {
        console.log(res)
        this.users = res
        this.dataSource = new MatTableDataSource(this.users);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      //err => console.log(err)
    );
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    
    if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
    }
  }
}
