import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { Usuario } from '../../models/usuario/usuario.interface';
import { FormsModule } from '@angular/forms';

import 'firebase/firestore'; 
import { Firestore, collection, addDoc } from '@angular/fire/firestore';




@Component({
  selector: 'app-log-in',
  imports: [ FormsModule],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {

  email = "";

  constructor(private router: Router, 
    private firestore:Firestore
  ) { }

  
  ngOnInit(){

    
    
  }
  async addUser() {
    console.log("primero: "+this.email)
    let user:Usuario = {email: this.email};
    try {
      // Obtén una referencia a la colección "sandwiches"
      const usuarios = collection(this.firestore, 'usuarios');
      // Agrega un nuevo documento a la colección
      console.log("email: "+this.email)
      await addDoc(usuarios, {
        email: user.email
      });

      // window.location.href()
      this.router.navigate(['/stemdo']);


    } catch (error) {

    }
  
}

}
