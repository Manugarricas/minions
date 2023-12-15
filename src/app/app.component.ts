import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { InlineComponent } from './inline/inline.component';
import { MinionsComponent } from './minions/minions.component';
import { ContadorComponent } from './contador/contador.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, InlineComponent, MinionsComponent, ContadorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //title = 'minions';
  currentCounter : number = 0;
  increment : number = 0;
  
}
