import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HelperService } from '../helper.service';
import { ParkingService } from '../parking.service';
import { ParkingInfo } from '../parkingInfo';

@Component({
  selector: 'app-parking-detail',
  templateUrl: './parking-detail.component.html',
  styleUrls: ['./parking-detail.component.scss']
})
export class ParkingDetailComponent implements OnInit {

  parkingId = parseInt(this.route.snapshot.paramMap.get('id')!);
  parking$ = this.parkingService.getParking(this.parkingId);

  constructor(
    private route: ActivatedRoute,
    private parkingService: ParkingService,
    public helper: HelperService
  ) { }

  ngOnInit(): void {
  }

}
