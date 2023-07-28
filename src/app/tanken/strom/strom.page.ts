import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-strom',
  templateUrl: './strom.page.html',
  styleUrls: ['./strom.page.scss'],
})
export class StromPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goBack() {
    this.router.navigateByUrl('/tanken');
  }
}
