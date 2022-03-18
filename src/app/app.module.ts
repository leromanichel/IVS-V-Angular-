import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OrganizationComponent } from './component/organization/organization.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { OrganizationService } from './services/organization/organization.service';


@NgModule({
  declarations: [
    AppComponent,
    OrganizationComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [OrganizationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
