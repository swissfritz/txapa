import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nutz',
  templateUrl: './nutz.page.html',
  styleUrls: ['./nutz.page.scss'],
})
export class NutzPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goBack() {
    this.router.navigateByUrl('/info');
  }

}