import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    
  }
  title = 'portfolio';

  redirectTo(section) {
    switch(section) {
      case 'PROFILE':
        window.location.href = '/profile'
        break;
      case 'EDUCATION':
        window.location.href = '/education'
        break;
    }
  }
}
