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
  public showmenu :any;
  currentUser : any;
  user: any;

 
  constructor(public userService : UserService, private router : Router, private tok : UserService) {
    this.currentUser = localStorage.getItem("id");
    this.tok.getUser(this.currentUser).subscribe(
      data => {
        this.user = data;
      },
      err => {
        console.log("error to get user");
      }
    );
  }



  logout(){
    this.token = localStorage.getItem('token');
    console.log(this.token);
    if (this.removeExistingItem(this.token)){
      this.userService.islogin = false;
      this.showmenu =false;
      console.log(this.showmenu);
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
