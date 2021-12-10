import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { ParkingDetailComponent } from './parking-detail/parking-detail.component';
import { ParkingsComponent } from './parkings/parkings.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/parkings', pathMatch: 'full' },
  { path: 'parkings', component: ParkingsComponent },
  { path: 'parking/:id', component: ParkingDetailComponent },
  { path: '**',  pathMatch: 'full', component: NotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
