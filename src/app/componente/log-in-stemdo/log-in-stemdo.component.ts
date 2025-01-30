import { Component, Inject, inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
import { CompartidoService } from '../../services/compartido.service';
import { Router, RouterLinkWithHref } from '@angular/router';
import { changeFavicon } from '../../utils/favicon-utils';
import { isPlatformBrowser} from '@angular/common';

// import {  }



@Component({
  selector: 'app-log-in-stemdo',
  imports: [RouterLinkWithHref],
  templateUrl: './log-in-stemdo.component.html',
  styleUrl: './log-in-stemdo.component.css'
})
export class LogInStemdoComponent implements OnInit{
  
  emailcp:string = "";
  private service = inject(CompartidoService)
  private route = inject(Router);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  
  ngOnInit(): void {
    this.emailcp = this.service.getEmail();
    console.log("email: "+this.emailcp);
    // changeFavicon('./../iconStemdo.jpeg');
    // changeFavicon('./../../../../iconStemdo.jpeg');
    // if (isPlatformBrowser(this.platformId)) {
      //   changeFavicon('./../../../../iconStemdo.jpeg');
      // }
    }
    
    ngAfterViewInit(): void {
      if (isPlatformBrowser(this.platformId)) {
        // changeFavicon('./../../../../iconStemdo.jpeg');
        changeFavicon('./../iconStemdo.ico');
    }
  }
}
