import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit  {
  title: string = 'SnakesAndLadders';
  disp: boolean = true;

  constructor(private router: Router) {}

  ngOnInit() {
    // Check the local storage for the flag
    const visitedGamePage = localStorage.getItem('visitedGamePage');

    if (visitedGamePage) {
      // User has visited the game page before, hide the game list
      this.disp = false;
    }

    // Subscribe to router events
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Check if the route is the game page
        if (
          event.url.includes('/oneboard') ||
          event.url.includes('/twoboard') ||
          event.url.includes('/threeboard') ||
          event.url.includes('/board')
        ) {
          // Set the flag in local storage
          localStorage.setItem('visitedGamePage', 'true');
        } else if (event.url.includes('/')) {
          this.disp = true;
        }
      }
    });
  }

  changeDisp() {
    this.disp = false;
  }
}
