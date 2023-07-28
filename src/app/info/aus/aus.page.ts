import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aus',
  templateUrl: './aus.page.html',
  styleUrls: ['./aus.page.scss'],
})
export class AusPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goBack() {
    this.router.navigateByUrl('/info');
  }

}
