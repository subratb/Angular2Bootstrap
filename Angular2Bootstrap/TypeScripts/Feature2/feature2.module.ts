import { NgModule }      from '@angular/core';
import {Feature2Child2Module} from './Child2/feature2.child2.module';


import { Feature2Child1Component }  from './child1/feature2.child1.component';
import { Feature2Child3Component }  from './child3/feature2.child3.component';
import { Feature2Component }  from './feature2.component';

import { feature2Routing } from './feature2.routing';

@NgModule({
    imports: [
        Feature2Child2Module,
        feature2Routing        
    ],
    declarations: [
        Feature2Child1Component,        
        Feature2Child3Component,
        Feature2Component
    ],
    exports: [Feature2Component]
})
export class Feature2Module { }