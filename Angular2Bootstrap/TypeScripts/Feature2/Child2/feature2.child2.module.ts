import { NgModule }      from '@angular/core';


import { Feature2Child2Grandchild1Component }  from './GrandChild1/feature2.child2.grandchild1.component';
import { Feature2Child2Grandchild2Component }  from './GrandChild2/feature2.child2.grandchild2.component';
import { Feature2Child2Component }  from './feature2.child2.component';

import { feature2child2Routing } from './feature2.child2.routing';

@NgModule({
    imports: [
        feature2child2Routing
    ],
    declarations: [
        Feature2Child2Grandchild1Component,
        Feature2Child2Grandchild2Component,
        Feature2Child2Component
    ],
    exports: [Feature2Child2Component]
})
export class Feature2Child2Module { } 