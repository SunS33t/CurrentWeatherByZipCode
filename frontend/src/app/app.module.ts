import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import { ToastrModule } from 'ngx-toastr';
import { MatTooltipModule} from '@angular/material/tooltip';
import {MatProgressSpinnerModule, MatSpinner} from '@angular/material/progress-spinner';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MatInputModule} from '@angular/material/input';
import { WeathercardComponent } from './weathercard/weathercard.component';
import { FahrenheitToCelsiusPipe } from './fahrenheit-to-celsius.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    WeathercardComponent,
    FahrenheitToCelsiusPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    HttpClientModule,
    MatIconModule,
    ToastrModule.forRoot(),
    MatTooltipModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
