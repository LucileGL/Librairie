import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterAuteurComponent } from './ajouter-auteur/ajouter-auteur.component';
import { RechercherAuteurComponent } from './rechercher-auteur/rechercher-auteur.component';

const routes: Routes = [
  {path: 'ajouter', component: AjouterAuteurComponent},
  {path: 'rechercher', component: RechercherAuteurComponent},
  ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuteurRoutingModule { }
