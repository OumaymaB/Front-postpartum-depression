import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.page.html',
  styleUrls: ['./edit-account.page.scss'],
})
export class EditAccountPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  passwordLink(){
   this.router.navigate(['/edit-password']);
  }

  previous(){
    this.router.navigate(['accueil']);
  }

}
