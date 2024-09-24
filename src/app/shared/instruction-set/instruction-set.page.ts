import { Component, Input, OnInit, OnChanges, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonImg, IonText } from '@ionic/angular/standalone';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-instruction-set',
  templateUrl: './instruction-set.page.html',
  styleUrls: ['./instruction-set.page.scss'],
  standalone: true,
  imports: [IonImg, IonText, CommonModule, FormsModule]
})
export class InstructionSetPage implements OnChanges {
  @Input() path: string = '';
  @Input() text: string = '';
  sanitizedText!: SafeHtml;
  private sanitizer = inject(DomSanitizer);

  ngOnChanges() {
    this.sanitizedText = this.sanitizer.bypassSecurityTrustHtml(this.text);
  }

}
