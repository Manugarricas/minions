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

  @Input() minionName:string = '';

  minion:Minion[] = [];

  constructor(private minionService: MinionService) {}

  ngOnInit(): void {
    this.minion = this.minionService.getFilterMinions(this.minionName);
  }

}
