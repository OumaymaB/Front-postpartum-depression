import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  token:any;
  showmenu=true;

 
  constructor(public userService : UserService, private router : Router) {

  }


  logout(){
    this.token = localStorage.getItem('token');
    console.log(this.token);
    if (this.removeExistingItem(this.token)){
      this.userService.islogin = false;
      this.showmenu = false;
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

goToProfil(){
  this.router.navigate(['profil'])
}
}
