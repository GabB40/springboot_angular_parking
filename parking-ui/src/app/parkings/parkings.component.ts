import { Component, OnInit } from '@angular/core';
import { HelperService } from '../helper.service';
import { ParkingService } from '../parking.service';

import { ParkingInfo } from '../parkingInfo';

@Component({
  selector: 'app-parkings',
  templateUrl: './parkings.component.html',
  styleUrls: ['./parkings.component.scss']
})
export class ParkingsComponent implements OnInit {

  // parkings!: ParkingInfo[]; // '!:' = Definite Assignment Assertions (voir TypeScript Doc)
  // parkings: ParkingInfo[] = []; on aurait pu faire comme ça  également : initialisation d'un  tableau de 'ParkingInfo' à vide
  parkings$ = this.parkingServie.getParkings();

  constructor(
    private parkingServie : ParkingService,
    public helper: HelperService
    ) { }

  ngOnInit(): void {
    // this.parkingServie.getParkings().subscribe(
    //   parkings => {
    //     this.parkings = parkings;
    //     this.isLoaded = true;
    //   }
    // );
    
  }

  trackByParkingId(index: number, parking: ParkingInfo): number {
    return parking.identifiant;
  }
}
