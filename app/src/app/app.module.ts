import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { RegisterComponent } from './components/register/register.component';
import { UsersService } from  './services/users.service';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { NavigationComponent } from './components/navigation/navigation.component';
import { appRoutes } from './app.routes';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { httpInterceptorProviders } from './http-interceptors';
import { GoodsComponent } from './components/goods/goods.component';
import { AuthGuard } from './guards/auth-guard'
import { AuthService } from './services/auth.service';

import { AngularMaterialModule } from './modules/angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PortalComponent } from './components/portal/portal.component';
import { PortalCardComponent } from './components/portal/portal-card/portal-card.component';
import { ArticlesModule } from './modules/articles/articles.module';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    RegisterComponent,
    NavigationComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    GoodsComponent,
    PortalComponent,
    PortalCardComponent
  ],
  imports: [
    ArticlesModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    FlexLayoutModule,
    RouterModule.forRoot(
      appRoutes,
      //{ enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [ AuthGuard, AuthService, UsersService, httpInterceptorProviders ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
