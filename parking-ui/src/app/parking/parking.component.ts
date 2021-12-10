import { Component, Input, OnInit } from '@angular/core';
import { HelperService } from '../helper.service';
import { ParkingInfo } from '../parkingInfo';

@Component({
  selector: 'app-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.scss']
})
export class ParkingComponent implements OnInit {
  @Input() parking!: ParkingInfo;
  @Input() index!: number;
  @Input() parkingCount!: number;
  @Input() isFirst!: Boolean;
  @Input() isLast!: Boolean;
  @Input() isOdd!: Boolean;
  @Input() isEven!: Boolean;
  
  constructor(public helper: HelperService) { }

  ngOnInit(): void {
  }

}
