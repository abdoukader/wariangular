import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'service/transaction.service';
import { Transaction} from './model/transaction';

import { from } from 'rxjs';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
  transactions = [];

  constructor(private bs:TransactionService) { }

  ngOnInit() {
    this.bs.getTransaction()
    .subscribe((res:Transaction[]) =>  {
        this.transactions = res
        console.log(res)
      },
      err => console.log(err)
    );
  }

}
