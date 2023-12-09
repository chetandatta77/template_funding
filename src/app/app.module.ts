import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { BlocksComponent } from './shared/blocks/blocks.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CompanyDetailsComponent } from './shared/company-details/company-details.component';
import { DeckComponent } from './shared/deck/deck.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BlocksComponent,
    FooterComponent,
    CompanyDetailsComponent,
    DeckComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    HeaderComponent,
    BlocksComponent,
    FooterComponent,
    CompanyDetailsComponent,
    DeckComponent
  ]
})
export class AppModule { }
