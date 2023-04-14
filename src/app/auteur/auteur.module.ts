import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuteurRoutingModule } from './auteur-routing.module';
import { AjouterAuteurComponent } from './ajouter-auteur/ajouter-auteur.component';
import { ListeAuteurComponent } from './liste-auteur/liste-auteur.component';
import { RechercherAuteurComponent } from './rechercher-auteur/rechercher-auteur.component';
import { AuteurComponent } from './auteur.component';


@NgModule({
  declarations: [
    AjouterAuteurComponent,
    RechercherAuteurComponent,
    ListeAuteurComponent,
    AuteurComponent,
  ],
  imports: [
    CommonModule,
    AuteurRoutingModule,
  ],
  exports: [
    AuteurComponent
  ]
})
export class AuteurModule { }
