import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  userToken = false;
  // userToken: string = '23dtrd65fgft66';

  constructor(
    private router: Router,
		private userService: UserService
  ) {
		this.userService.currentLoginState.subscribe((loginState) => {
			this.userToken = loginState;
		});
	}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.userToken) {
      this.router.navigateByUrl('auth');
      return false;
    }

    return true;
  }
  
}
