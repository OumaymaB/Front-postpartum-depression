import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-profil-follower',
  templateUrl: './profil-follower.page.html',
  styleUrls: ['./profil-follower.page.scss'],
})
export class ProfilFollowerPage implements OnInit {

  currentUser: any;
  user : any;
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

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
     // if (data.length == 1000) {
       // event.target.disabled = true;
     // }
    }, 500);
  }

  goSearch(){
    this.router.navigate(['search']);
  }



}
