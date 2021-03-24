import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListproductComponent } from './module/catalogue/listproduct/listproduct.component';
import { FilterproductComponent } from './module/catalogue/filterproduct/filterproduct.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { PanierComponent } from './module/panier/panier/panier.component';
import { RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { FormulaireComponent } from './module/compte client/formulaire/formulaire.component';
import { InformationsComponent } from './module/compte client/informations/informations.component';

import { NgxsModule } from '@ngxs/store';
import { DetailComponent } from './module/catalogue/detail/detail.component';


const appRoutes : Routes = [
  { path : '', component: HomeComponent },
  { path : 'catalogue', component: ListproductComponent},
  { path : 'catalogue/:id', component : DetailComponent},
  { path : 'espace-client', component: FormulaireComponent}
]



@NgModule({
  declarations: [
    AppComponent,
    ListproductComponent,
    FilterproductComponent,
    HeaderComponent,
    PanierComponent,
    HomeComponent,
    FooterComponent,
    FormulaireComponent,
    InformationsComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ClarityModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    NgxsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
