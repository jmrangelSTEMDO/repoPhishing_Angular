import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { gAnalyticsService } from '../../services/g-analytics.service';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  constructor ( private analyticsService: gAnalyticsService){}

  ngOnInit(){
    console.log("esta cargando el c footer");
    this.analyticsService.trackEvent('footer loaded', 'footer loaded into view','1');
    console.log("pasa");

  }

}
