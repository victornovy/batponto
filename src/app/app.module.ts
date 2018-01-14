import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

// Declarations
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from 'angularfire2/auth';
import { firebaseConfig } from '../config/environment';

// Pages
import { MyApp } from './app.component';
import { PontosPage } from '../pages/pontos/pontos';
import { HoursPage } from '../pages/hours/hours';
import { DetailsPage } from "../pages/details/details";
import { HomePage } from "../pages/home/home";
import { SettingsPage } from "../pages/settings/settings";
import { LoginPage } from '../pages/login/login';

// Pipes
import { HourPipe } from '../pipes/hour/hour';
import { DatePipe } from '../pipes/date/date';
import { HourDecimalPipe } from '../pipes/hour-decimal/hour-decimal';

// Providers
import { BatPontoProvider } from '../providers/batponto/batponto.service';
import { SettingsProvider } from '../providers/settings/settings';
import { Facebook } from '@ionic-native/facebook';

// Components
import { AddPontoComponent } from '../components/add-ponto/add-ponto';
import { LoginProvider } from '../providers/login/login';

@NgModule({
    declarations: [
        MyApp,
        LoginPage,
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
        AngularFireDatabaseModule,
        AngularFireAuthModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        LoginPage,
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
        Facebook,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        BatPontoProvider,
        SettingsProvider,
    LoginProvider,
    ]
})
export class AppModule {}
