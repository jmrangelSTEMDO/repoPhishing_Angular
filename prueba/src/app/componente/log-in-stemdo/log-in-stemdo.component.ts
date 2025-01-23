import { Component, inject, Input, OnInit } from '@angular/core';
import { CompartidoService } from '../../services/compartido.service';


@Component({
  selector: 'app-log-in-stemdo',
  imports: [],
  templateUrl: './log-in-stemdo.component.html',
  styleUrl: './log-in-stemdo.component.css'
})
export class LogInStemdoComponent implements OnInit{
  
  emailcp:string = "";
  private service = inject(CompartidoService)


  ngOnInit(): void {
        this.emailcp = this.service.getEmail();
        console.log("email: "+this.emailcp);
      
  }
}
