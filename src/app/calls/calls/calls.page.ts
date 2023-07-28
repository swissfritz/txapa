import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calls',
  templateUrl: './calls.page.html',
  styleUrls: ['./calls.page.scss'],
})
export class CallsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  tx() {
    this.router.navigateByUrl('/office');
  }

  ws() {
    this.router.navigateByUrl('/werkstatt');
  }
}
