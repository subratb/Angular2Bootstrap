import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Feature3Component }  from './feature3.component';

const feature3Routes: Routes = [
    {
        path: 'feature3',
        component: Feature3Component
    }
];

export const feature3Routing: ModuleWithProviders = RouterModule.forChild(feature3Routes);