import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-falsch',
  templateUrl: './falsch.page.html',
  styleUrls: ['./falsch.page.scss'],
})
export class FalschPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goBack() {
    this.router.navigateByUrl('/tanken');
  }
}