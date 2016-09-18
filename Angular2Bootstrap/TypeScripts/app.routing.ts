import {ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

import {Feature1Component} from './Feature1/feature1.component';
import {Feature2Component} from './Feature2/feature2.component';
import {Feature3Component} from './Feature3/feature3.component';
import {Feature4Component} from './Feature4/feature4.component';

import { HomeComponent }  from './Home/home.component';
import { LoginComponent }  from './Login/login.component';
import { RegisterComponent }  from './Register/register.component';
import { AboutComponent }  from './About/about.component';
import { PageNotFoundComponent }  from './page-not-found.component';

import {AuthGuard} from './Services/auth-guard.service';
import {CanDeactivateGuard} from './Services/can-deactivate-guard.service';
import {AuthService} from './Services/auth.service';

const appRoutes: Routes = [        
    {
        path: '',
        component: HomeComponent,
        data: {
            title: 'Home'
        },
        canActivate: [AuthGuard]
    },
    {
        path: 'register',
        component: RegisterComponent,
        data: {
            title: 'Register'
        }
    },
    {
        path: 'login',
        component: LoginComponent,
        data: {
            title: 'Login'
        }
    },
    {
        path: 'about',
        component: AboutComponent,
        data: {
            title: 'About'
        }
    }    
    ,{ path: '**', component: PageNotFoundComponent }
];

export const appRoutingProviders: any[] = [
    AuthGuard,
    CanDeactivateGuard,
    AuthService
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);