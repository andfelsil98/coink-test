import { inject, Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loading: HTMLIonLoadingElement | null = null;
  private loadingController = inject(LoadingController);


  async presentLoading(message: string = 'Cargando...') {
    this.loading = await this.loadingController.create({
      message,
      spinner: 'crescent',
    });
    return this.loading.present();
  }

  async dismissLoading() {
    if (this.loading) {
      await this.loading.dismiss();
      this.loading = null;
    }
  }
}
