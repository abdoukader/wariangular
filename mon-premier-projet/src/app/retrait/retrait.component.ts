import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RetraitService } from 'service/retrait.service';

@Component({
  selector: 'app-retrait',
  templateUrl: './retrait.component.html',
  styleUrls: ['./retrait.component.scss']
})
export class RetraitComponent implements OnInit {
  retrait = [];

  constructor(private retire: RetraitService,private retirerR:RetraitService, private router: Router) { }

  ngOnInit() {
  }
  retirer(){
    this.retire.retirer(this.retirerR)
      .subscribe(
        res => {
          console.log(res)
          localStorage.setItem('access_token', res.jwt)
          this.router.navigate(['/special'])
        },
        err => console.log(err)
      )
  }
  OnSubmit(cni,code){
    this.retirerR.postRetirer(
      cni.value,
      code.value
      
    ).subscribe(
      data=>{
        console.log(data);
        cni.value = null;
        code.value = null;
       
      }
    )
  }

}
