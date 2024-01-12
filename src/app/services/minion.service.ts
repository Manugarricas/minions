import { Injectable, Input, OnInit, Output } from '@angular/core';
import { Minion } from '../Interfaces/minion';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MinionService {
  
  private url = "http://localhost:3000/minions";
  constructor(private http: HttpClient) {}

  minions:Minion[] = [];

  getMinions():Observable<Minion[]> {
    return this.http.get<Minion[]>(this.url);
  }

  getOneMinion(id:string) {
    return this.http.get<Minion>(this.url+"/"+id);
  }

  //Filtrado de los minions
  getFilterMinions(term: string): Minion[] {
    let filtered : Minion[] = [];
    if (term) {
      this.minions.forEach(minion => {
        if (minion.name.toLowerCase().includes(term.toLowerCase())) {
          filtered.push(minion);
        }
      })
    }
    else {
      return this.minions;
    }
    return filtered;
  }

}
