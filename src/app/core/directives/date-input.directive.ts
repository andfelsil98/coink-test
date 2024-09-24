

import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDateInput]',
  standalone: true
})
export class DateInputDirective {
  private regex: RegExp = new RegExp(/^\d{0,2}\/?\d{0,2}\/?\d{0,4}$/);
  private specialKeys: Array<string> = ['Backspace', 'Tab', 'End', 'Home', '/'];

  constructor(private el: ElementRef) {}

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (this.specialKeys.indexOf(event.key) !== -1) {
      return;
    }

    const input: HTMLInputElement = this.el.nativeElement;
    const newValue = input.value + event.key;

    if (newValue && !String(newValue).match(this.regex)) {
      event.preventDefault();
    }
  }

  @HostListener('input', ['$event'])
  onInput(event: Event) {
    const input: HTMLInputElement = this.el.nativeElement;
    let value = input.value.replace(/\D/g, '');

    if (value.length >= 2) {
      value = value.replace(/(\d{2})(\d)/, '$1/$2');
    }
    if (value.length >= 5) {
      value = value.replace(/(\d{2})(\d{2})/, '$1/$2');
    }
    if (value.length >= 10) {
      value = value.slice(0, 10);
    }

    input.value = value;
  }
}





