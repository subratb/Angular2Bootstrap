import { Injectable }             from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable }             from 'rxjs/Observable';

import { Feature1Child1, Feature1Service } from '../Services/feature1.service';

@Injectable()
export class Feature1Child1Resolve implements Resolve<Feature1Child1> {
    constructor(private cs: Feature1Service, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot): Observable<any> | Promise<any> | any {
        let id = +route.params['id'];

        return this.cs.getChild(id).then(feature1Child1 => {
            if (feature1Child1) {
                return feature1Child1;
            } else { // id not found
                this.router.navigate(['/feature1']);
                return false;
            }
        });
    }
}