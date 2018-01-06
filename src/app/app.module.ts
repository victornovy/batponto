import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

// Declarations
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { firebaseConfig } from '../config/environment';

// Pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HoursPage } from '../pages/hours/hours';
import { DetailsPage } from "../pages/details/details";

// Pipes
import { HourPipe } from '../pipes/hour/hour';
import { DatePipe } from '../pipes/date/date';

// Providers
import { BatPontoProvider } from '../providers/batponto/batponto.service';

// Components
import { AddPontoComponent } from '../components/add-ponto/add-ponto';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HoursPage,
    DetailsPage,
    HourPipe,
    DatePipe,
    AddPontoComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HoursPage,
    DetailsPage,
    AddPontoComponent,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BatPontoProvider,
  ]
})
export class AppModule {}
