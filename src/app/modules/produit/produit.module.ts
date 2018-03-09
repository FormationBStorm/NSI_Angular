import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListeComponent } from './components/liste/liste.component';
import { DetailComponent } from './components/detail/detail.component';
import {ProduitRoutingModule} from './produit-routing.module';
import {SoldePipe} from './filters/solde.pipe';
import {FirstUpperPipe} from './filters/first-upper.pipe';
import {DisponibilitePipe} from './filters/disponibilite.pipe';
import {RouterModule, Routes} from '@angular/router';
import { ProduitViewComponent } from './components/produit-view/produit-view.component';
import {MagasinService} from './services/magasin.service';
import { EditComponent } from './components/edit/edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    ProduitRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [
    ListeComponent,
    DetailComponent,
    SoldePipe,
    FirstUpperPipe,
    DisponibilitePipe,
    ProduitViewComponent,
    EditComponent,
  ],
  providers: [ MagasinService ],
  exports: [ SoldePipe, FirstUpperPipe, DisponibilitePipe ]
})
export class ProduitModule { }
