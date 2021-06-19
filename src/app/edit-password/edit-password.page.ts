import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-password',
  templateUrl: './edit-password.page.html',
  styleUrls: ['./edit-password.page.scss'],
})
export class EditPasswordPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  previous(){
    this.router.navigate(['edit-account']);
  }
}
