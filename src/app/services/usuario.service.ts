import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private httpCliente : HttpClient, ) { }
  
  
  setUsuario(email:string):Observable<number[]>{
    return this.httpCliente.post<any>('https://nuevaapi.onrender.com/api/usuarios', {email})
      .pipe(tap(
        (res:any) =>{
          if(res){
            console.log("correcto")
          }else{
            console.log("failed")
          }
        })
    );
  }

  
}