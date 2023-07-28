import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kontrolle',
  templateUrl: './kontrolle.page.html',
  styleUrls: ['./kontrolle.page.scss'],
})
export class KontrollePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goBack() {
    this.router.navigateByUrl('/info');
  }

}
