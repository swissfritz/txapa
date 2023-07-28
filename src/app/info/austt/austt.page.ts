import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-austt',
  templateUrl: './austt.page.html',
  styleUrls: ['./austt.page.scss'],
})
export class AusttPage {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goBack() {
    this.router.navigateByUrl('/info');
  }
}
