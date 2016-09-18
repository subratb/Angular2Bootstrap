import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Feature4Component }  from './feature4.component';

const feature4Routes: Routes = [
    {
        path: 'feature4',
        component: Feature4Component
    }
];

export const feature4Routing: ModuleWithProviders = RouterModule.forChild(feature4Routes);