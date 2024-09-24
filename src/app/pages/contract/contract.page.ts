import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular'
import { HeaderPage } from 'src/app/shared/header/header.page';
import { InstructionSetPage } from 'src/app/shared/instruction-set/instruction-set.page';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-contract',
  templateUrl: './contract.page.html',
  styleUrls: ['./contract.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HeaderPage, InstructionSetPage, RouterModule]
})
export class ContractPage {

  constructor() { }

}
