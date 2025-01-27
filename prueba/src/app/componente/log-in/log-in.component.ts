import { Component, EventEmitter, inject, Output } from '@angular/core';
import { Router} from '@angular/router';
import { Usuario } from '../../models/usuario/usuario.interface';
import { ReactiveFormsModule, FormsModule, FormBuilder, Validators, ControlEvent } from '@angular/forms';
import 'firebase/firestore'; 
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';
import { CompartidoService } from '../../services/compartido.service';





@Component({
  selector: 'app-log-in',
  imports: [ FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {

  
  constructor(private firestore:Firestore, private formBuilder:FormBuilder) {}

  showErrorMessage: boolean = false;
  login: any;
  private ruta = inject(Router);
  private service = inject(CompartidoService);



  
  ngOnInit(){
    this.login = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]]
    });
    
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
      console.log("segundo")
      this.showErrorMessage = false;
      this.service.setEmail(user.email);

      
      try {
        // Obtén una referencia a la colección "sandwiches"
        const usuarios = collection(this.firestore, 'usuarios');
        // Agrega un nuevo documento a la colección
        await addDoc(usuarios, {
          email: user.email
        });
        this.ruta.navigate(["/stemdo"]);
  
  
      } catch (error) {
  
      }
    }
}


}
