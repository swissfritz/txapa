import { Component, OnInit } from '@angular/core';
import { EmailComposer, OpenOptions } from 'capacitor-email-composer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panne',
  templateUrl: './panne.page.html',
  styleUrls: ['./panne.page.scss'],
})
export class PannePage implements OnInit {

  message: string = '';
  zul: string = '';
  stao: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  sendMail() {

    this.message = 'Panne Standort: ' + this.stao + '<br>' +
    'Kennzeichen: ' + this.zul;
    const options: OpenOptions = {
      to: ['panne@taxiwerbung.at'],
      subject: 'Wagen nicht fahrbar - Pannendreieck im Heckfenster!',
      body: this.message,
      isHtml: true
    };
    EmailComposer.open(options);
  }
}
