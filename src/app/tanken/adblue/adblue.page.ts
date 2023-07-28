import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adblue',
  templateUrl: './adblue.page.html',
  styleUrls: ['./adblue.page.scss'],
})
export class AdbluePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goBack() {
    this.router.navigateByUrl('/tanken');
  }
}
