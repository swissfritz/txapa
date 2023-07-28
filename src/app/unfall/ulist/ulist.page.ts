import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ulist',
  templateUrl: './ulist.page.html',
  styleUrls: ['./ulist.page.scss'],
})
export class UlistPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goUnfall() {
    this.router.navigateByUrl('/fotos');
  }
}
