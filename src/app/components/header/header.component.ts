import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private authService: AuthService, private userService:UserService) {}

  onLogout(): void {
    this.authService.removeToken();
  }

  onMovieList():void{
   this.userService.goToMovies()
  }
}
