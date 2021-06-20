import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-publication',
  templateUrl: './add-publication.page.html',
  styleUrls: ['./add-publication.page.scss'],
})
export class AddPublicationPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  annuler(){
    this.router.navigate(['accueil']);
  }

}
