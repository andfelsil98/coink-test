import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonContent, IonImg, IonButton, IonText, IonButtons } from "@ionic/angular/standalone";
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-auth-screen',
  templateUrl: './auth-screen.page.html',
  styleUrls: ['./auth-screen.page.scss'],
  standalone: true,
  imports: [IonButtons, IonText, IonButton, IonImg, IonContent,FormsModule, RouterModule]
})
export class AuthScreenPage {

  constructor() { }

}
