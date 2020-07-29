import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-reactive",
  templateUrl: "./reactive.component.html",
  styleUrls: ["./reactive.component.css"],
})
export class ReactiveComponent implements OnInit {
  forma: FormGroup;

  constructor(private fb: FormBuilder) {
    this.crearFormulario();
  }

  ngOnInit() {}

  crearFormulario() {
    this.forma = this.fb.group({
      nombre: ['César'],
      apellido: ['González'],
      correo: ['cedgo1997@gmail.com'],
    });
  }

  guardar() {
    console.log(this.forma);
  }



}
