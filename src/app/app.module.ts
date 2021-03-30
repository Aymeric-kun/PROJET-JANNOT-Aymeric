import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NgxsModule } from '@ngxs/store';
import { PanierState } from '../shared/states/panierstate';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'profil',
    loadChildren: () =>
      import('./module/compte client/compteclient.module').then(
        (i) => i.EspaceclientModule
      ),
  },
  {
    path: 'catalogue',
    loadChildren: () =>
      import('./module/catalogue/catalogue.module').then(
        (i) => i.CatalogueModule
      ),
  },
  {
    path: 'panier',
    loadChildren: () =>
      import('./module/panier/panier.module').then((i) => i.PanierModule),
  },
];

@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent, FooterComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ClarityModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    NgxsModule.forRoot([PanierState]),
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
