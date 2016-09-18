import { NgModule }      from '@angular/core';

import { Feature3Component }  from './feature3.component';

import {feature3Routing } from './feature3.routing';

@NgModule({
    imports: [
        feature3Routing
    ],
    declarations: [        
        Feature3Component        
    ],
    exports: [Feature3Component]
})
export class Feature3Module { }