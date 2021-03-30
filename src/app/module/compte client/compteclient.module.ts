import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InformationsComponent } from './informations/informations.component';
import { FormulaireComponent} from './formulaire/formulaire.component';
import {FormsModule} from '@angular/forms';



const appRoutes: Routes = [
  {
    path: '',
    component: FormulaireComponent,
    children: [
      {
        path: 'info-client',
        component: InformationsComponent
      }
    ],
  },
];


@NgModule({
  declarations: [
    FormulaireComponent,
    InformationsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
    FormsModule
  ],
  exports: [
    RouterModule
  ]
})

export class EspaceclientModule { }
