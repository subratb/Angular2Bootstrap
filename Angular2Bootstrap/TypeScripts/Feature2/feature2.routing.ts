import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Feature2Child1Component }  from './child1/feature2.child1.component';
import { Feature2Child3Component }  from './child3/feature2.child3.component';
import { Feature2Component }  from './feature2.component';

import {AuthGuard} from '../Services/auth-guard.service';
import {CanDeactivateGuard} from '../Services/can-deactivate-guard.service';

const feature2Routes: Routes = [
    //{ path: '', redirectTo: 'child1', pathMatch:'full' },
    //{ path: 'child1', component: Feature2Child1Component, canActivate: [AuthGuard] },
    //{ path: 'child3', component: Feature2Child3Component, canDeactivate: [CanDeactivateGuard] }

    {
        path: 'feature2',
        component: Feature2Component,
        children: [
            { path: 'child1', component: Feature2Child1Component, canActivate: [AuthGuard] },              
            { path: 'child3', component: Feature2Child3Component, canDeactivate: [CanDeactivateGuard] },
            { path: '', component: Feature2Child1Component }
        ]
    }
];

export const feature2Routing: ModuleWithProviders = RouterModule.forChild(feature2Routes);