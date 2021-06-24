import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../model/User';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {

  currentUser: any;
  user : any;
  user_pub:any;
  publications : any = [];
  users : any = [];
  constructor(private router : Router, private token : UserService) { }
  
  ngOnInit() {
    this.currentUser = localStorage.getItem("id");
    this.user = this.token.getUser(this.currentUser).subscribe(
      data => {
        this.user = data;
      },
      err => {
        console.log("error to get user");
      }
    );
    this.token.getPublication().subscribe(
      data => {
        this.publications = data;
      },
      err => {
        console.log("error to get publication");
      }
    );
  }

  publier(){
    this.router.navigate(['add-publication']);
  }
  goSearch(){
    this.router.navigate(['search']);
  }

 


}
