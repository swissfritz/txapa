import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-diesel',
  templateUrl: './diesel.page.html',
  styleUrls: ['./diesel.page.scss'],
})
export class DieselPage {
  public alertButtons = [
    {
      text: 'Schließen',
      role: 'confirm',
      cssClass: 'customButtoncss',
      handler: () => { console.log('Alert confirmed'); }
    }
  ];

  constructor(private router: Router) { }


  goBack() {
    this.router.navigateByUrl('/tanken');
  }
}
