import { Injectable } from '@angular/core';
import { ParkingInfo } from './parkingInfo';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ParkingService {

  constructor(private httpClient: HttpClient) { }

  getParkings(): Observable<ParkingInfo[]> {
    return this.httpClient.get<ParkingInfo[]>(environment.apiUrl + '/parkings')
  }

  iWantMyFuckingParkings(): ParkingInfo[] {
    return [
      {
        identifiant: 123,
        nom: 'OhMyGod',
        nbPlacesDispo: 120,
        nbPlacesTotal: 1200,
        statut: 'NOT YOUR BUISNESS',
        heureMaj: '32h98',
      },
      {
        identifiant: 456,
        nom: 'Evel\'sHere',
        nbPlacesDispo: 666,
        nbPlacesTotal: 666,
        statut: 'GO TO HELL',
        heureMaj: '66h66',
      }
    ]
  }

  getParking(id: number): Observable<ParkingInfo | undefined> {
    return this.httpClient.get<ParkingInfo[]>(environment.apiUrl + '/parkings').pipe(
      map(parkings => parkings.find(parking => parking.identifiant === id))
    );
  }
}
