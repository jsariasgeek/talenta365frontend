import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegionsComponent } from './regions/regions.component';
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { environment } from 'src/environments/environment';
import { RegionDetailComponent } from './region-detail/region-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    RegionsComponent,
    RegionDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ApolloModule,
    FormsModule,
    HttpLinkModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    apollo:Apollo,
    httpLink:HttpLink
  ){
    apollo.create({
      link:httpLink.create({uri:environment.backend}),
      cache: new InMemoryCache()
    })
  }
}
