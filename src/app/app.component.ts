import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { InlineComponent } from './inline/inline.component';
import { MinionComponent } from './minions/minions.component';
import { ContadorComponent } from './contador/contador.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, InlineComponent, MinionComponent, ContadorComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @Input() currentCounter : number = 0;
  increment : number = 10;
  updateCounter(value: number) {
    console.log(value);
    this.currentCounter = value;
  }
}
