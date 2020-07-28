import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  constructor() { }

  usuario = {
    nombre: 'César',
    apellido:'González',
    correo:'cedgo1997@gmail.com'
  }



  ngOnInit() {
  }


  guardar(forma: NgForm) {
    console.log(forma)
    console.log(forma.value)
  }
}
