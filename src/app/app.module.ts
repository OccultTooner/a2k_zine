import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ZineHeaderComponent } from './zine-header/zine-header.component';
import { ZineFooterComponent } from './zine-footer/zine-footer.component';
import { SafePipe } from './pipes/safe-pipe';
import { AppRoutingModule } from './app-routing.module';
import { ViewZineComponent } from './view-zine/view-zine.component';

@NgModule({
  declarations: [AppComponent, MainPageComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ZineHeaderComponent,
    ZineFooterComponent,
    SafePipe,
    AppRoutingModule,

  ],
  providers: [SafePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
