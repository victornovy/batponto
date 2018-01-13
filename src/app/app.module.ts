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
import { PontosPage } from '../pages/pontos/pontos';
import { HoursPage } from '../pages/hours/hours';
import { DetailsPage } from "../pages/details/details";
import { HomePage } from "../pages/home/home";
import { SettingsPage } from "../pages/settings/settings";

// Pipes
import { HourPipe } from '../pipes/hour/hour';
import { DatePipe } from '../pipes/date/date';

// Providers
import { BatPontoProvider } from '../providers/batponto/batponto.service';

// Components
import { AddPontoComponent } from '../components/add-ponto/add-ponto';
import { HourDecimalPipe } from '../pipes/hour-decimal/hour-decimal';

@NgModule({
    declarations: [
    MyApp,
    HomePage,
    PontosPage,
    HoursPage,
    DetailsPage,
    HourPipe,
    DatePipe,
    AddPontoComponent,
    SettingsPage,
    HourDecimalPipe,
    ],
    imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
        tabsHideOnSubPages: true
    }),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
    MyApp,
    HomePage,
    PontosPage,
    HoursPage,
    DetailsPage,
    AddPontoComponent,
    SettingsPage,
    ],
    providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BatPontoProvider,
    ]
})
export class AppModule {}
