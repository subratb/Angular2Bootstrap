import { NgModule }      from '@angular/core';


import { Feature1Child1Component }  from './child1/feature1.child1.component';
import { Feature1Child2Component }  from './child2/feature1.child2.component';
import { Feature1Component }  from './feature1.component';

import { feature1Routing } from './feature1.routing';
import {Feature1Child1Resolve} from './feature1-child1-resolve.service';

@NgModule({
    imports: [
        feature1Routing
    ],
    declarations: [
        Feature1Child1Component,
        Feature1Child2Component,
        Feature1Component
    ],
    exports: [Feature1Component],
    providers: [Feature1Child1Resolve]
})
export class Feature1Module { }