import { Component, OnInit } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';
import { mapKey } from 'src/environments/env';

@Component({
  selector: 'app-anfahrt',
  templateUrl: './anfahrt.page.html',
  styleUrls: ['./anfahrt.page.scss'],
})
export class AnfahrtPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  async ionViewDidEnter() {
    const apiKey = mapKey.key;
    const mapRef = document.getElementById('map') as HTMLElement;
    const newMap = await GoogleMap.create({
      id: 'Taxoil-map',
      element: mapRef,
      apiKey: apiKey,
      config: {
        center: {
          lat: 48.266512,
          lng: 16.449592,
        },
        zoom: 15,
      },
    });

    const markerId = await newMap.addMarker({
      coordinate: {
        lat: 48.266512,
        lng: 16.449592,
      }
    });
  }  
}

