import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonImg, IonText, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { HeaderPage } from 'src/app/shared/header/header.page';
import { InstructionSetPage } from 'src/app/shared/instruction-set/instruction-set.page';
import { Router } from '@angular/router';
@Component({
  selector: 'app-confirm-number',
  templateUrl: './confirm-number.page.html',
  styleUrls: ['./confirm-number.page.scss'],
  standalone: true,
  imports: [IonCol, IonRow, IonGrid, IonText, IonImg, IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderPage, InstructionSetPage]
})
export class ConfirmNumberPage {
  phoneNumber: string = '';
  private router = inject(Router);

  addNumber(num: number): void {
    if (this.phoneNumber.length < 10) this.phoneNumber += num.toString();
  }

  removeNumber(): void {
    this.phoneNumber = this.phoneNumber.slice(0, -1);
  }

  nextStep(){
    if (this.phoneNumber.length === 10) this.router.navigate(['/register-form']);
  }

  //GETTERS
  get formattedNumber(): string {
    if (!this.phoneNumber) return 'XXX XXX XXXX';
    const part1 = this.phoneNumber.substring(0, 3);
    const part2 = this.phoneNumber.substring(3, 6);
    const part3 = this.phoneNumber.substring(6, 10);
    return `${part1.padEnd(3, 'X')} ${part2.padEnd(3, 'X')} ${part3.padEnd(4, 'X')}`.trim();
  }





}
