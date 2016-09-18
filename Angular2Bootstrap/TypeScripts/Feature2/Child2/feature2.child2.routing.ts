import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Feature2Child2Grandchild1Component }  from './GrandChild1/feature2.child2.grandchild1.component';
import { Feature2Child2Grandchild2Component }  from './GrandChild2/feature2.child2.grandchild2.component';
import { Feature2Child2Component }  from './feature2.child2.component';

const feature2child2Routes: Routes = [
    {
        path: 'feature2',
        children: [{
            path: 'child2',
            component: Feature2Child2Component,
            children: [
                { path: 'grandchild1', component: Feature2Child2Grandchild1Component },
                { path: 'grandchild2', component: Feature2Child2Grandchild2Component },
                { path: '', component: Feature2Child2Grandchild1Component }
            ]
        }]
    }
];

export const feature2child2Routing: ModuleWithProviders = RouterModule.forChild(feature2child2Routes);