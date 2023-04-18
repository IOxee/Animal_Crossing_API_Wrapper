import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  time: any = 'Loading...';
  app_title: any = 'Nook Phone';
  names: any = {
    "nookphone": "Nook Phone",
    "art": "Art",
    "best_friends": "Best Friends",
    "bugs": "Bugs",
    "calendar": "Calendar",
    "camera": "Camera",
    "chat": "Chat",
    "clock": "Clock",
    "design": "Custom Design",
    "diy": "DIY Recipes",
    "fish": "Fish",
    "help": "Help",
    "mail": "Mail",
    "map": "Map",
    "music": "Music",
    "nook_miles": "Nook Miles",
    "okmotors": "Ok Motors",
    "passport": "Passport",
    "settings": "Settings",
    "shop": "Shopping",
    "terraform": "Terraforming",
    "villagers": "Villagers",
    "weather": "Weather"
  };

  updateTime() {
    let date = new Date();
    this.time = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    // document.querySelector('.time').textContent = date.toLocaleTimeString();
  }

  set_title(appId: string) {
    this.app_title = this.names[appId];
  }

  constructor(private Router: Router) {}

  ngOnInit() {
    this.updateTime();
    setInterval(() => this.updateTime(), 500);
  }

  openApp(appId: string) {
    // router link
    this.Router.navigate([appId]);
  }

}
