import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  activePageTitle = 'Startseite';
  pages = [
    {
      title: 'Startseite',
      url: '/home',
      icon: ''
    },
    {
      title: 'Informationen',
      url: '/info',
      icon: ''
    },
    {
      title: 'Geöffnet / Anrufen',
      url: '/calls',
      icon: ''
    },
    {
      title: 'Fahrzeug buchen',
      url: '/buchen',
      icon: ''
    },
    {
      title: 'Tanken',
      url: '/tanken',
      icon: ''
    },
    {
      title: 'Regeln',
      url: '/regeln',
      icon: ''
    },
    {
      title: 'Panne',
      url: '/panne',
      icon: ''
    },
    {
      title: 'Unfall',
      url: '/ulist',
      icon: ''
    },
    {
      title: 'Anfahrt',
      url: '/anfahrt',
      icon: ''
    },
    {
      title: 'Rückmeldung',
      url: '/feedback',
      icon: ''
    },
    
  ];
  constructor() {}
}
