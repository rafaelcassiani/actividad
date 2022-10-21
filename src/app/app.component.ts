import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
title = 'proyecto';
pantalla="";
pantalla2="";
operador="";
uno(uno:string){
  this.pantalla=this.pantalla+uno;
}
dos(dos:string){
  this.pantalla=this.pantalla+dos;
}
tres(tres:string){
  this.pantalla=this.pantalla+tres;
}
cuatro(cuatro:string){
  this.pantalla=this.pantalla+cuatro;
}
cinco(cinco:string){
  this.pantalla=this.pantalla+cinco;
}
seis(seis:string){
  this.pantalla=this.pantalla+seis;
}
siete(siete:string){
  this.pantalla=this.pantalla+siete;
}
ocho(ocho:string){
  this.pantalla=this.pantalla+ocho;
}
nueve(nueve:string){
  this.pantalla=this.pantalla+nueve;
}
cero(cero:string){
  this.pantalla=this.pantalla+cero;
}
coma(coma:string){
  this.pantalla=this.pantalla+coma;
}
mas(){
  this.pantalla2=this.pantalla;
  this.pantalla="";
  this.operador="mas"
}
menos(){
  this.pantalla2=this.pantalla;
  this.pantalla="";
  this.operador="menos"
}
eliminar(){
  this.pantalla="";
}
porcentaje(){
}
eliminar_todo(){
  this.pantalla="";
  this.pantalla2="";;
}
division(){
  this.pantalla2=this.pantalla;
  this.pantalla="";
  this.operador="division"
}
multiplicacion(){
  this.pantalla2=this.pantalla;
  this.pantalla="";
  this.operador="multiplicacion"
}
igual(){
  if(this.operador=="mas"){
    let numero = Number(this.pantalla);
    let numero2 = Number(this.pantalla2);
    let suma = numero + numero2;
    this.pantalla= suma.toString();
  }
  else if(this.operador=="menos"){
    let numero = Number(this.pantalla);
    let numero2 = Number(this.pantalla2);
    let Resta = numero2- numero;
    this.pantalla= Resta.toString(); 
    this.pantalla2="";
  }
  else if(this.operador=="multiplicacion"){
    let numero = Number(this.pantalla);
    let numero2 = Number(this.pantalla2);
    let Resta = numero*numero2;
    this.pantalla= Resta.toString(); 
    this.pantalla2="";
  }
  else if(this.operador=="Division"){
    let numero = Number(this.pantalla);
    let numero2 = Number(this.pantalla2);
    let Resta = numero/numero2;
    this.pantalla= Resta.toString(); 
    this.pantalla2="";
  }
}
}
