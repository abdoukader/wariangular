import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { from } from 'rxjs';
import { AuthService } from './auth.service';
import { JwtModule } from '@auth0/angular-jwt';
import { PartenaireComponent } from './partenaire/partenaire.component';
import { UserComponent } from './user/user.component';
import { UserService } from './user.service';
import { AjoutPartenaireService} from './ajout-partenaire.service';
import { TemplateComponent } from './template/template.component';
import { EnvoieComponent } from './envoie/envoie.component';
import { RetraitComponent } from './retrait/retrait.component';
import { TransactionComponent } from './transaction/transaction.component';
import { CompteComponent } from './compte/compte.component';
import { DepotComponent } from './depot/depot.component';


// import { Interceptor } from './interceptor';
// import { TokenIterceptorservice, TokenInterceptorService } from './token-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    PartenaireComponent,
    UserComponent,
    TemplateComponent,
    EnvoieComponent,
    RetraitComponent,
    TransactionComponent,
    CompteComponent,
    DepotComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: function  tokenGetter() {
             return     localStorage.getItem('access_token');},
        whitelistedDomains: ['localhost:8000'],
        blacklistedRoutes: ['http://localhost:8000/api/login']
      }
    })
  ],
  providers: [AuthService,UserService,AjoutPartenaireService,
    // { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
