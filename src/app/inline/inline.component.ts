import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inline',
  standalone: true,
  imports: [],
  templateUrl: './inline.component.html'
})
export class InlineComponent {

  constructor(private router:Router) {}
  
  search(valor: string) {
    this.router.navigateByUrl('/RefreshComponent', {skipLocationChange: true}).then(() => {
      this.router.navigate(['/minions/'+valor]);
    })
  }

}
