import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-spinner',
  template: `<ion-item *ngIf="isLoading$ | async">
            <ion-label>Lines Sharp</ion-label>
            <ion-spinner name="lines-sharp"></ion-spinner>
            </ion-item>`,
  styleUrls: ['./spinner.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class SpinnerPage {
  private spinnerService = inject(SpinnerService);
  isLoading$ = this.spinnerService.isLoading$;
  constructor() { }
}
