import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [],
  templateUrl: './contador.component.html'
})
export class ContadorComponent {
  @Input() increment : number = 0;  
  @Input() currentCounter : number = 0;
  sumar(increment : number, currentCounter : number) {
    return currentCounter += increment;
  }
  restar(increment : number, currentCounter : number) {
    return currentCounter -= increment;
  }
  @Output() eventoEnviar = new EventEmitter<void>();
}
