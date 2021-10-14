import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-ng-app';
  showSecret = false;
  log: Date[] = [];
  trackLog(){
    this.log.push(new Date());
  }
}
