import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false

  login(): boolean {
    let loginPrompt = prompt("Entrez votre mot de passe :")

    if (loginPrompt && loginPrompt == "1234") {
      this.isLoggedIn = true
      return true
    } else {
      return false
    }
  }
}
