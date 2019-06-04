import { Component, OnInit } from '@angular/core';
import { User, Address }  from '../shared/model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name: string;
  user: User;

  ngOnInit() {
    this.name = 'Angular';
    this.user  = new User();
    this.user.firstname = "Percy";
    let personalAddress = new Address();
    personalAddress.country = 'FRANCE';
    this.user.personalAddress = personalAddress;
    console.log(this.user);
  }
}
