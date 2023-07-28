import { Component, OnInit } from '@angular/core';
import { EmailComposer, OpenOptions } from 'capacitor-email-composer';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {
  message: string = '';

  constructor() { }

  ngOnInit() {
  }

  sendMail() {

    const options: OpenOptions = {
      to: ['barbara.ketzerau@taxoil.at'],
      subject: 'Rückmeldung',
      body: this.message,
      isHtml: true
    };
    EmailComposer.open(options);
  }
}
