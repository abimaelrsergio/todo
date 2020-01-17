import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password){

    //console.log('antes: ' + this.isUserLoggedIn());

    if(username === 'abimael' && password === 'sergio'){
      
      sessionStorage.setItem('authenticateUser', username);

      //console.log('depois: ' + this.isUserLoggedIn());

      return true;
    }

    return false;

  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticateUser')
    return !(user === null)
  }

}
