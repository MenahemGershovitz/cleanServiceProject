import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { Routes, RouterModule } from '@angular/router';
import { TarifComponent } from './tarif/tarif.component';
import { HomeComponent } from './home/home.component';
import { CleanServiceViewComponent } from './clean-service-view/clean-service-view.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ListeProduitsComponent } from './liste-produits/liste-produits.component';
import { ArticlesComponent } from './articles/articles.component';
import { FormsModule } from '@angular/forms';
import { ListUsersComponent } from './list-users/list-users.component';
import { HttpClientModule } from '@angular/common/http';


const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'tarifs', component: TarifComponent},
  {path: 'tarifs/:id', component: ListeProduitsComponent},
  {path: 'signUp', component: SignUpComponent},
  {path: 'authentification', component: AuthentificationComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TarifComponent,
    HomeComponent,
    CleanServiceViewComponent,
    AuthentificationComponent,
    SignUpComponent,
    ListeProduitsComponent,
    ArticlesComponent,
    ListUsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
