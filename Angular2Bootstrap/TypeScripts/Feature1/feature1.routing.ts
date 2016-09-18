import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Feature1Child1Component }  from './child1/feature1.child1.component';
import { Feature1Child2Component }  from './child2/feature1.child2.component';
import { Feature1Component }  from './feature1.component';

import {Feature1Child1Resolve} from './feature1-child1-resolve.service';
import {CanDeactivateGuard} from '../Services/can-deactivate-guard.service';

const feature1Routes: Routes = [
    {
        path: 'feature1',
        component: Feature1Component,
        children: [
            { path: 'child1', component: Feature1Child1Component },
            { path: 'child2', component: Feature1Child2Component },
            {
                path: ':id', component: Feature1Child1Component,
                canDeactivate: [CanDeactivateGuard],
                resolve: {
                    feature1child1: Feature1Child1Resolve
                }
            },
            {
                path: '', component: Feature1Child2Component
            }
        ]
    }
];

export const feature1Routing: ModuleWithProviders = RouterModule.forChild(feature1Routes);