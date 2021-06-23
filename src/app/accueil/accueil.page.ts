import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {


  constructor(private router : Router) { }
  
  ngOnInit() {
  }

  publier(){
    this.router.navigate(['add-publication']);
  }



}
