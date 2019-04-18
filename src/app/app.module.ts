import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './error/page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { CertificateComponent } from './certificate/certificate/certificate.component';
import { AboutUsModule } from './aboutUs/about-us/about-us.module';
import { AboutUsRoutingModule } from './aboutUs/about-us/about-us-routing.module';
import { AppProductModule } from './product/app-product/app-product.module';
import { AppProductRoutingModule } from './product/app-product/app-product-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    HomeComponent,
    FooterComponent,
    ContactComponent,
    PageNotFoundComponent,
    CertificateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule ,
    AboutUsModule,
    AppProductModule,
    AboutUsRoutingModule,
    AppProductRoutingModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
