import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular'
import { HeaderPage } from 'src/app/shared/header/header.page';
import { InstructionSetPage } from 'src/app/shared/instruction-set/instruction-set.page';
import { FormsService } from 'src/app/services/forms.service';
import { DocumentTypesList } from 'src/app/core/resources/documentTypesList';
import { basicTypes } from 'src/app/core/interfaces/document-types';
import { DateInputDirective } from 'src/app/core/directives/date-input.directive';
import { GenreList } from 'src/app/core/resources/genreList';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.page.html',
  styleUrls: ['./register-form.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HeaderPage,InstructionSetPage, ReactiveFormsModule, DateInputDirective]
})
export class RegisterFormPage implements OnInit {
  private fb = inject(FormBuilder);
  private formsService = inject(FormsService);
  private router = inject(Router)
  registerForm!: FormGroup;
  documentTypesList: basicTypes[] = DocumentTypesList;
  genreList : basicTypes[] = GenreList;
  ngOnInit() {
    this.registerForm = this.fb.group({
      documentType: ['', Validators.required],
      documentNumber: ['', [Validators.required]],
      documentExpedition: ['', [Validators.required]],
      dateBirth: ['', [Validators.required]],
      genre: ['', [Validators.required]],
      email: ['', [Validators.required]],
      emailConfirm: ['', [Validators.required]],
      pin: ['', [Validators.required]],
      pinConfirm: ['', [Validators.required]],
    });
    this.getDocumentTypes();
  }
  getDocumentTypes(){
    const documentTypesObserver = {
      next: (data: basicTypes[]) => {
        if (data) this.documentTypesList = data;
      },
      error: async (error: Error) => {
        console.error(error);
      }
    };
    this.formsService.getDocumentTypes().subscribe(documentTypesObserver);
  }

  onSubmit(){
    this.registerForm.markAllAsTouched();
    if(this.registerForm.valid) this.router.navigate(['/contract'])
  }

}
