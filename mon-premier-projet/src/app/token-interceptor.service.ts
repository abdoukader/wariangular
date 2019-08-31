// import { Injectable, Injector } from '@angular/core';
// import { HttpInterceptor } from '@angular/common/http';
// import { AuthService } from './auth.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class TokenInterceptorService implements HttpInterceptor {

//   constructor(private injector: Injector, private AuthService AuthService) { }

//   intercept(req, next){
//     let AuthService = this.injector.get(AuthService)
//     let tokenizedReq = req.clone({
//       setHearders: {
//         authorization: 'Bearer ${authService.saveToken()}'
//       }
//     })
//     return next.handle(tokenizedReq)
//   }
// }
