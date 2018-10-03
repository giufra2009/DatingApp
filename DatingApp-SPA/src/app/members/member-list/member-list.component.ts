import { Component, OnInit } from '@angular/core';
import { User } from '../../_modules/user';
import { UserService } from '../../_services/user.service';
import { AlertfyService } from '../../_services/alertfy.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
   users: User[];
  constructor(private userService: UserService, private alertify: AlertfyService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
    this.users = data['users'];
    });
  }

}
