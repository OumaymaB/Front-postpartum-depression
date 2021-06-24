import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  token:any;
  currentUser : any;
  user: any;

 
  constructor(public userService : UserService, private router : Router) {
    this.userService.user.subscribe(x => this.user = x);
  }


  logout(){
    this.token = localStorage.getItem('token');
    if (this.removeExistingItem(this.token)){
      this.userService.user.next(null);
      this.userService.isLogin.next(false);
      this.router.navigate(['login'])
    }else
  console.log("Error");
}

removeExistingItem(key) {
  if (key === null)
      return false;
  localStorage.removeItem(key);
  return true;
}

goToProfil(id){
  this.router.navigate(['profil',id]);
}

goToAccount(id){
  this.router.navigate(['edit-account',id]);
}

}
