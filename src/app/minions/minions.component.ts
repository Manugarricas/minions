import { Component, Input, OnInit } from '@angular/core';
import { Minion } from '../Interfaces/minion';
import { CommonModule } from '@angular/common';
import { MinionService } from '../services/minion.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-minion',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './minions.component.html',
  styleUrl: './minions.component.css'
})
export class MinionComponent implements OnInit {

  minions: Minion[] = [];

  favorites: Minion[] = [];

  favorite(minion: Minion) {
    if (this.favorites.indexOf(minion) != -1) {
      this.favorites = this.favorites.filter(minions => minions != minion)
    } else {
      this.favorites.push(minion)
    }
  }

  isInFavorites(minion: Minion) {
    return this.favorites.indexOf(minion) != -1;
  }

  @Input() searchTerm: string = '';
  constructor(private minionsService: MinionService) { };

  ngOnInit(): void {
    this.minionsService.getMinions().subscribe({
      next: (minions) => {
        minions.forEach(minion => {
          this.minions.push(minion)
        })
      }
    })
  }

}