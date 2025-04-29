import { Component, EventEmitter, inject, Output } from '@angular/core';
import { Router} from '@angular/router';
import { Usuario } from '../../models/usuario/usuario.interface';
import { ReactiveFormsModule, FormsModule, FormBuilder, Validators } from '@angular/forms';


import { CommonModule } from '@angular/common';
import { CompartidoService } from '../../services/compartido.service';
import { FaviconService } from '../../services/favicon.service';
import { UsuarioService } from '../../services/usuario.service';




@Component({
  selector: 'app-log-in',
  imports: [ FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {

  
  constructor(private formBuilder:FormBuilder, private faviconService: FaviconService) {}


  showErrorMessage: boolean = false;
  login: any;
  private ruta = inject(Router);
  private service = inject(CompartidoService);
  userService = inject(UsuarioService);



  
  ngOnInit(){
    this.login = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]]
    });
    this.faviconService.changeFavicon('./../Microsoft_23401.ico');
  }
 
  async addUser() {

    let user:Usuario = {
      email: this.login.get("email")!.value!
    };

    if (this.login.invalid) {
      console.log("primero "+ this.login.invalid)
      this.showErrorMessage = true;
    } else {
      
      // Si el formulario es válido, oculta el mensaje de error
      this.showErrorMessage = false;
      this.service.setEmail(user.email);

      
      try {
//    aqui ira el codigo para hacer el fetch por post
        this.userService.setUsuario(user.email).subscribe({
          next: (data:any) => {
            console.log("usuario añadido: "+user.email)
          },
          error: (e) => {
            console.error(e);
          }
        })

        this.ruta.navigate(["/stemdo"]);
      } catch (error) {
  
      }
    }
}


}
