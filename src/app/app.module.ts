import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProverbComponent } from './proverb/proverb.component';
import { ProverbInfoComponent } from './proverb-info/proverb-info.component';
import { DaysCountPipe } from './days-count.pipe';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProverbComponent,
    ProverbInfoComponent,
    DaysCountPipe,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
