import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PartenaireService } from '../partenaire.service';

@Component({
  selector: 'app-partenaire',
  templateUrl: './partenaire.component.html',
  styleUrls: ['./partenaire.component.scss']
})
export class PartenaireComponent implements OnInit {
  partenaire = [];

  constructor(private _userServive: PartenaireService ,private _router: Router) { }

  ngOnInit() {
    this._userServive.getPartenaire()
    .subscribe(
      res => this.partenaire = res,
      err => console.log(err)
    );
  }

}
