import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";
import { HomePageComponent } from './components/home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';
import { TopBlockComponent } from './components/top-block/top-block.component';
import { FooterComponent } from './components/footer/footer.component';
import { SystemsComponent } from './components/systems/systems.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { NetworkingWifiComponent } from './components/networking-wifi/networking-wifi.component';
import { SupportComponent } from './components/support/support.component';
import { QuoteComponent } from './components/quote/quote.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    TopBlockComponent,
    FooterComponent,
    SystemsComponent,
    ServicesComponent,
    ContactFormComponent,
    NetworkingWifiComponent,
    SupportComponent,
    QuoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: '', component: HomePageComponent},
      {path: 'systems', component: SystemsComponent},
      {path: 'services', component: ServicesComponent},
      {path: 'networking-wifi', component: NetworkingWifiComponent},
      {path: 'support', component: SupportComponent},
      {path: 'quote', component: QuoteComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
