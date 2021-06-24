import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.page.html',
  styleUrls: ['./edit-account.page.scss'],
})
export class EditAccountPage implements OnInit {
 user:any;
  constructor(private router : Router, private token : UserService) { }

  ngOnInit() {
    this.user = this.token.getUser(localStorage.getItem("id")).subscribe(
      data => {
        this.user = data;
      },
      err => {
        console.log("error to get user");
      }
    );
  }

  passwordLink(){
   this.router.navigate(['/edit-password']);
  }

  previous(){
    this.router.navigate(['accueil']);
  }

}
