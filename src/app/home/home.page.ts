import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public logo = "trivia/src/assets/logo.jpeg"
  constructor(private router: Router,) {}

  public login(){
    this.router.navigate(['teacher/login/']);
  }
  public goToQuestionary(){
    this.router.navigate(['questionary/welcome/']);
  }
}
