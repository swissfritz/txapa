import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tanken',
  templateUrl: './tanken.page.html',
  styleUrls: ['./tanken.page.scss'],
})
export class TankenPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  dit() {
    this.router.navigateByUrl('/diesel');
  }

  adtx() {
    this.router.navigateByUrl('/adblue');
  }

  strtx() {
    this.router.navigateByUrl('/strom');
  }

  faltx() {
    this.router.navigateByUrl('/falsch');
  }
}