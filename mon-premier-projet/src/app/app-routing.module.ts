import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { PartenaireComponent} from './partenaire/partenaire.component';
import { TemplateComponent } from './template/template.component';
import { EnvoieComponent} from './envoie/envoie.component';
import { RetraitComponent } from './retrait/retrait.component';
import { TransactionComponent } from './transaction/transaction.component';
import { DepotComponent } from './depot/depot.component';
import { ListeusersComponent } from './listeusers/listeusers.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: '/register',
    pathMatch: 'full'
  },
  {
    path: 'template',
    component: TemplateComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
    
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'partenaire',
    component: PartenaireComponent
  },
  
  {
    path: 'transaction',
    component: TransactionComponent
  },
  {
    path: 'envoie',
    component: EnvoieComponent
  },
  {
    path: 'retrait',
    component: RetraitComponent
  },
  {
    path: 'depot',
    component: DepotComponent
  },
  {
    path: 'listeuser',
    component: ListeusersComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }