import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './routes/home/home.module';
import { StateService } from '@app/core/state.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule, HomeModule],
  providers: [provideHttpClient(), StateService],
  bootstrap: [AppComponent],
})
export class AppModule {}
