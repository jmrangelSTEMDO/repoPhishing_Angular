import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { slideInRight } from './route-animations';




declare let gtag: Function;

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  standalone:true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [ slideInRight ]
})
export class AppComponent {
  title = 'prueba';


  constructor(private router: Router) {

  }
  ngOnInit(){

}

  setUpAnalytics() {
    this.router.events.pipe(filter(event  => event instanceof NavigationEnd))
        .subscribe((event: NavigationEnd) => {
            gtag('config', 'G-5B3HKFB3VH',
                {
                    page_path: event.urlAfterRedirects
                }
            );
        });
  }
}


