import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.page.html',
  styleUrls: ['./add-comment.page.scss'],
})
export class AddCommentPage implements OnInit {

  user:any;
  constructor(private router : Router, private token : UserService) { 
    this.token.user.subscribe(x => this.user = x);
  }

  ngOnInit() {
  }

}
