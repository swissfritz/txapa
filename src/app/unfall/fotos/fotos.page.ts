import { Router } from '@angular/router';import { Component } from '@angular/core';
import { App } from '@capacitor/app';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Attachment, EmailComposer, OpenOptions } from 'capacitor-email-composer';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.page.html',
  styleUrls: ['./fotos.page.scss'],
})
export class FotosPage {
  currentImage: any = null;
  imageData?: string = '';
  photos?: Attachment[] = [];
  nm: number = 0;
  nam: string = '';

  constructor(
    public router: Router) {
      
      App.addListener('appRestoredResult', (data) => {
        console.log('My state:', JSON.stringify(data));
        if (
          data.pluginId == 'Camera' &&
          data.methodName == 'getPhoto' &&
          data.success
        ) {
          this.imageData = data.data.webPath;
        }
      });
    }

    async captureImage () {
        const image = await Camera.getPhoto({
          quality: 30,
          allowEditing: false,
          source: CameraSource.Camera,
          resultType: CameraResultType.Base64
        });
  
        this.imageData = image.base64String;
        this.currentImage = `data:image/jpeg;base64,${this.imageData}`;  
        this.nm += 1;
        this.nam = this.nextName();
        console.log('name: ', this.nam);
        this.addPhoto();
        console.log('photos :', this.photos )
    }
  
    addPhoto() {
      if (this.imageData) {
        const photo: Attachment = {
          type: 'base64',
          path: this.imageData,
          name: this.nam
        };
      
        if (this.photos) {
          this.photos.push(photo);  
        }
      }
      
    }
  
    nextName() {
      let pref: string = 'foto';
      let num: string = String(this.nm);
      let suff: string = '.png';
      let ezw: string = pref.concat(num);
      this.nam = ezw.concat(suff);
      return this.nam;
    }
  
    async sendMail() {
      const options: OpenOptions = {
        to: ['fritzfrei45@gmail.com'],
        subject: 'Unfall',
        body: 'Meine Unfallfotos',
        attachments: this.photos
      };
  
      await EmailComposer.open(options);
    }
  }
  