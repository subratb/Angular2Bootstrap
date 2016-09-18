import {Component, OnInit} from '@angular/core';

import {Router, ActivatedRoute }from '@angular/router';

import {Feature1Child1} from '../../Services/feature1.service';

@Component({
    selector: 'my-app-feature1-child1',
    templateUrl: `./Html/Feature1/Child1/child1.html`
})
export class Feature1Child1Component implements OnInit {

    Id: number = 0;
    feature1Child1: Feature1Child1;
    constructor(private route: ActivatedRoute,private router:Router) { }
    ngOnInit() {
        this.route.data.forEach((data: { feature1Child1: Feature1Child1 }) => {
            this.Id = data.feature1Child1.Id;
            this.feature1Child1 = data.feature1Child1;
        });
    }
}