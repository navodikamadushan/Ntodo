import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { NtodoComponent } from './components/ntodo/ntodo.component';
import { NtodotitleComponent } from './components/ntodotitle/ntodotitle.component';
import { NtodocreateComponent } from './components/ntodocreate/ntodocreate.component';

@NgModule({
  declarations: [
    AppComponent,
    NtodoComponent,
    NtodotitleComponent,
    NtodocreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'Ntodo'),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
