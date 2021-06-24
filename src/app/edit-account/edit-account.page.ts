import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.page.html',
  styleUrls: ['./edit-account.page.scss'],
})
export class EditAccountPage implements OnInit {
 user:any;
 id:any;
  constructor(private _Activatedroute:ActivatedRoute, private router : Router, private token : UserService) { }

  ngOnInit() {
    this._Activatedroute.paramMap.subscribe(params => { 
      this.id = params.get('id'); 
  });
    this.user = this.token.getUser(this.id).subscribe(
      data => {
        this.user = data;
      },
      err => {
        console.log("error to get user");
      }
    );
  }

  passwordLink(id){
   this.router.navigate(['/edit-password',id]);
  }

  previous(){
    this.router.navigate(['accueil']);
  }


}
