import { Component, Input } from '@angular/core';
import { MinionService } from '../services/minion.service';
import { Minion } from '../Interfaces/minion';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html'
})
export class DetailsComponent {

  @Input() minionId:string = '';

  minion!:Minion;

  constructor(private minionService: MinionService) {}

  ngOnInit(): void {
    this.minionService.getOneMinion(this.minionId).subscribe({
      next: (minion) => this.minion = minion
    })
  }

}
