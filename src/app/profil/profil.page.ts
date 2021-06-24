import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {

  user :any;
  currentUser:any;
  id:any;
  status :any;

  constructor(private _Activatedroute:ActivatedRoute, public alertController: AlertController, private token : UserService, private router : Router) { }

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

  async presentAlertMultipleButtons(id,userId) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      message: 'Etes-vous certaine de vouloir supprimer la publication?',
      buttons: [{
        text: 'Non'
      }, {
        text: 'Oui',
        handler: () => {
          this.deletePublication(id);    
          window.location.reload();
        }
      }
    ]
    });

    await alert.present();
  }

deletePublication(id){
  this.token.deletePub(id).subscribe(
    () => {this.status = 'Delete successful';
  },err => {
      console.log("error delete");
    }
    
  );
  console.log(this.status);
}
}
