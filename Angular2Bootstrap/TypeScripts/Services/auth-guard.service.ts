import { Injectable }     from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot }    from '@angular/router';
import {AuthService} from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log('AuthGuard#canActivate called');

        //authenticated, return true
        if (this.authService.isLoggedIn) {
            return true;
        }

        //not authenticated, store the url, redirect to login page
        this.authService.redirectUrl = state.url;
        this.router.navigate(['/login']);
        return false;
    }
}