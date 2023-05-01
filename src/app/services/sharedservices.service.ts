import { Injectable } from '@angular/core';
import { Offre } from '../core/Model/Offre';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  selectedOffer!: Offre;

  constructor() { }
}
