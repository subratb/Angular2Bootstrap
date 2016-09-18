import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import {Feature1Module} from './Feature1/feature1.module';
import {Feature2Module} from './Feature2/feature2.module';
import {Feature3Module} from './Feature3/feature3.module';
import {Feature4Module} from './Feature4/feature4.module';


import { HomeComponent }  from './Home/home.component';
import { LoginComponent }  from './Login/login.component';
import { RegisterComponent }  from './Register/register.component';
import { AboutComponent }  from './About/about.component';
import { PageNotFoundComponent }  from './page-not-found.component';
import { AppComponent }  from './app.component';

import {routing, appRoutingProviders} from './app.routing';

import {Feature1Service} from './Services/feature1.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        Feature1Module,
        Feature2Module,          
        Feature3Module,
        Feature4Module        
    ],
    declarations: [
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        AboutComponent,
        PageNotFoundComponent,
        AppComponent
    ],    
    providers: [        
        appRoutingProviders,
        Feature1Service
    ],
    bootstrap: [AppComponent]
})
export class AppModule {    
}