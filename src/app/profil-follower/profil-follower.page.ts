import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil-follower',
  templateUrl: './profil-follower.page.html',
  styleUrls: ['./profil-follower.page.scss'],
})
export class ProfilFollowerPage implements OnInit {

  constructor() { }

  ngOnInit() {
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
}
