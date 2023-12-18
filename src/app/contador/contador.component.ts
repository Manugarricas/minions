import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contador.component.html'
})
export class ContadorComponent {
  @Input() increment : number = 0;  
  currentCounter : number = 0;
  @Output() counterChange: EventEmitter<number> = new EventEmitter<number>();
  sumar() {
    this.currentCounter += this.increment;
    this.counterChange.emit(this.currentCounter);
  }
  restar() {
    this.currentCounter -= this.increment;
    this.counterChange.emit(this.currentCounter);
  }
}
