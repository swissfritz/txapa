import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goCam() {
    this.router.navigateByUrl('/cam');
  }

  goAus() {
    this.router.navigateByUrl('/aus');
  }

  goPark() {
    this.router.navigateByUrl('/park');
  }

  goWer() {
    this.router.navigateByUrl('/werpr');
  }

  goFar() {
  this.router.navigateByUrl('/fahr');
  }

  goNutz() {
    this.router.navigateByUrl('/nutz');
  }

  goWeb() {
    this.router.navigateByUrl('/austt');
  }
}
