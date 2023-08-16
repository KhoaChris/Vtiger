import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TuiArcChartModule} from '@taiga-ui/addon-charts';


import { FirstNavbarComponent } from 'src/app/components/first-navbar/first-navbar.component';


@NgModule({
  declarations: [FirstNavbarComponent],
  imports: [
    CommonModule,
    TuiArcChartModule,
  ],
  exports: [
    TuiArcChartModule,
    FirstNavbarComponent
  ]
})
export class SharedModule { }
