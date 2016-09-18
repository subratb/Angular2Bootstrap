import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({    
    selector: 'my-app',
    templateUrl: `./Html/app.html`
    
})
export class AppComponent {
    constructor(private router: Router) {

    }
}