import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { gAnalyticsService } from '../../services/g-analytics.service';


@Component({
  selector: 'app-log-in',
  imports: [],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {

  constructor(private router: Router) { }
  
  ngOnInit(){
    // this.analyticsService.trackEvent('footer loaded', 'footer loaded into view','');
    console.log("log in")
  }

}
