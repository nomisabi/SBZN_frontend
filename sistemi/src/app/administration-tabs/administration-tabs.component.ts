import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-administration-tabs',
  templateUrl: './administration-tabs.component.html',
  styleUrls: ['./administration-tabs.component.css']
})
export class AdministrationTabsComponent implements OnInit {

  username: string = '';
  active=1;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.username = this.authService.getCurrentUser();
  }

  logout(){
    this.authService.logout();
  }

  goToTab(id){

    this.active=id
  }
}
