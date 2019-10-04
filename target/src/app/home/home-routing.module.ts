import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ToolbarModule, ButtonModule } from 'primeng/primeng';
import { HomeComponent } from './home.component';
import { NavModule } from './nav/nav.module';

const routes : Routes = [
  {path: '', component: HomeComponent}
];

const primeModules = [
    ToolbarModule, ButtonModule
  ];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    primeModules,
    RouterModule.forChild(routes),
    NavModule
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
