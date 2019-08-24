import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProverbComponent } from './proverb/proverb.component';
import { ProverbInfoComponent } from './proverb-info/proverb-info.component';
import { DaysCountPipe } from './days-count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProverbComponent,
    ProverbInfoComponent,
    DaysCountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
