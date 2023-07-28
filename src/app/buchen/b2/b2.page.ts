import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { EmailComposer, OpenOptions } from 'capacitor-email-composer';

@Component({
  selector: 'app-b2',
  templateUrl: './b2.page.html',
  styleUrls: ['./b2.page.scss'],
})
export class B2Page implements OnInit {

  mo: string = '';
  di: string = '';
  mi: string = '';
  do: string = '';
  fr: string = '';
  sa: string = '';
  so: string = '';
  basinf: string = '';
  mes1: string = '';
  woche2: string = '';
  message: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.mes1 = history.state.m1;
    console.log('Message 1: ', this.mes1);
  }

  makeList() {
    this.woche2 = [
      this.mo, this.di, this.mi, this.do, this.fr, this.sa, this.so
    ].filter(day => day !== undefined).join(' ');
  }

  buildMessage() {
    this.makeList();
    this.message = this.mes1 + ', für übernächste Woche: ' + this.woche2;
  }

  sendMail() {
    this.buildMessage();
    const options: OpenOptions = {
      to: ['bestellen@taxiwerbung.at'],
      subject: 'Taxi-Reservierung',
      body: this.message,
      isHtml: true
    };

    EmailComposer.open(options);
  }
}

