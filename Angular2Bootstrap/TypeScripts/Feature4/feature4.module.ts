import { NgModule }      from '@angular/core';

import { Feature4Component }  from './feature4.component';

import {feature4Routing } from './feature4.routing';

@NgModule({
    imports: [
        feature4Routing
    ],
    declarations: [
        Feature4Component        
    ],
    exports: [Feature4Component]
})
export class Feature4Module { }