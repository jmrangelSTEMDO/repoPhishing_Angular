import { Component, inject, Input, OnInit } from '@angular/core';
import { CompartidoService } from '../../services/compartido.service';
import { Router, RouterLinkWithHref } from '@angular/router';
import { changeFavicon } from '../../utils/favicon-utils';



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
  
  
  ngOnInit(): void {
    this.emailcp = this.service.getEmail();
    console.log("email: "+this.emailcp);
    changeFavicon('./../iconStemdo.jpeg');
    
  }
}
