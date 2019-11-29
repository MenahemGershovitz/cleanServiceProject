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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {PanierComponent} from './panier/panier.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AuthInterceptor } from './interceptor/auth-interceptor';
import { AuthGuard } from './guards/auth.guard';
import { EspaceAdminComponent } from './espace-admin/espace-admin.component';
import {TableModule} from 'primeng/table';
import { isAdminGuard } from './guards/is-admin.guard';

const appRoutes: Routes = [
  {path: '', redirectTo:'home',pathMatch:'full'},
  {path: 'home', component: HomeComponent, canActivate:[AuthGuard]},
  {path: 'espace-admin', component: EspaceAdminComponent, canActivate:[AuthGuard, isAdminGuard]},
  {path: 'tarifs', component: TarifComponent, canActivate:[AuthGuard]},
  {path: 'tarifs/:id', component: ListeProduitsComponent, canActivate:[AuthGuard]},
  {path: 'signUp', component: SignUpComponent},
  {path: 'authentification', component: AuthentificationComponent},
  {path: 'panier', component: PanierComponent, canActivate:[AuthGuard]},
  {path: 'checkout', component: CheckoutComponent, canActivate:[AuthGuard]},
];

@NgModule({
  declarations: [
    AppComponent,
    TarifComponent,
    HomeComponent,
    PanierComponent,
    CleanServiceViewComponent,
    AuthentificationComponent,
    SignUpComponent,
    ListeProduitsComponent,
    ArticlesComponent,
    ListUsersComponent,
    CheckoutComponent,
    EspaceAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    TableModule
    
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
