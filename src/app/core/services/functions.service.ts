import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class FunctionsService {
  loading: HTMLIonLoadingElement;
  constructor(public toastController: ToastController,
    public loadingCtrl: LoadingController,
    private router: Router,) { }


  async toastError(error: any) {
    const toast = await this.toastController.create({
      message:
        (error.message as string).split(': ')[1] || 'Algo malo ha ocurrido',
      duration: 4000,
      color: 'danger',
    });
    toast.present();
  }
  async toastMessage(message: any, type) {
    const toast = await this.toastController.create({
      message: message,
      duration: 4000,
      color: type,
    });
    toast.present();
  }
  async showLoad(message: string) {
    this.loading = await this.loadingCtrl.create({
      message,
    });
    await this.loading.present();
  }
  async closeLoad() {
    this.loading.dismiss();
  }

  navigateTo(link) {
    this.router.navigate([link]);
  }

  async setLocal(name, value) {
    console.log('typeof ', typeof (value))
    console.log('value', value)
    console.log('name', name)
    let obj = '';
    switch (typeof (value)) {
      case 'object':
        obj = 'object|' + JSON.stringify(value);
        await localStorage.setItem(name, obj);
        break;
      case 'boolean':
        obj = 'boolean|' + value;
        await localStorage.setItem(name, obj);
        break;
      case 'number':
        obj = 'number|' + value;
        await localStorage.setItem(name, obj);
        break;
      case 'string':
        obj = 'string|' + value;
        await localStorage.setItem(name, obj);
        break;
      default:
        break;
    }

  }
  async getLocal(name) {
    ;
    let obj = localStorage.getItem(name).split('|');
    switch (obj[0]) {
      case 'object':
        return await JSON.parse(obj[1]);
        break;
      case 'boolean':
        return await obj[1];
        break;
      case 'number':
        return await obj[1];
        break;
      case 'string':
        return await obj[1];
        break;
      default:
        break;
    }
  }
  async clearLocal() {
    await localStorage.clear();
  }

}
