import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
 users : any;
  constructor( private token : UserService, private router : Router) { }

  ngOnInit() {
  }

  search(term: string): void {
    this.token.getUsers(term).subscribe(
      data => {
        this.users = data;

      },
      err => {
        console.log("error to get users");
      }
    );
  }

  goToProfil(id){
    this.router.navigate(['profil-follower',id]);
  }
}
