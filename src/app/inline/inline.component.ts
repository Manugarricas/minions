import { Component, EventEmitter, Output } from '@angular/core';
import { Minion } from '../Interfaces/minion';

@Component({
  selector: 'app-inline',
  standalone: true,
  imports: [],
  templateUrl: './inline.component.html'
})
export class InlineComponent {
  minionName: string = "";
  @Output() emiter : EventEmitter<string> = new EventEmitter<string>();
  search(valor: string) {
    this.emiter.emit(valor);
  }
}
