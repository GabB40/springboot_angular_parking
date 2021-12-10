import { Injectable } from '@angular/core';
import { ParkingInfo } from './parkingInfo';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  calculStyleStatut(parking: ParkingInfo) {
    switch (parking.statut) {
      case 'OUVERT' :
        return {color: '#5cb85c', 'font-weight': 'bold', 'text-shadow': '2px 2px 4px #333'};
      case 'ABONNES' :
        return {color: '#f0ad4e', 'font-weight': 'bold', 'text-shadow': '2px 2px 4px #333'};
      case 'FERME' :
        return {color: ' #d9534f ', 'font-weight': 'bold', 'text-shadow': '2px 2px 4px #333'};
      default:
        return {color: ' #f7f7f7', 'font-style': 'italic', 'text-shadow': '2px 2px 4px #333'}
    }
  }
}
