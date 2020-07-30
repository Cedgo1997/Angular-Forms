import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-reactive",
  templateUrl: "./reactive.component.html",
  styleUrls: ["./reactive.component.css"],
})
export class ReactiveComponent implements OnInit {
  forma: FormGroup;

  constructor(private fb: FormBuilder) {
    this.crearFormulario();
    this.cargarDataAlFormulario();
  }

  ngOnInit() {}

  get nombreNoValido() {
    return this.forma.get("nombre").invalid && this.forma.get("nombre").touched;
  }

  get apellidoNoValido() {
    return (
      this.forma.get("apellido").invalid && this.forma.get("apellido").touched
    );
  }

  get correoNoValido() {
    return this.forma.get("correo").invalid && this.forma.get("correo").touched;
  }

  get distritoNoValido() {
    return (
      this.forma.get("direccion.distrito").invalid &&
      this.forma.get("direccion.distrito").touched
    );
  }

  get ciudadNoValido() {
    return (
      this.forma.get("direccion.ciudad").invalid &&
      this.forma.get("direccion.ciudad").touched
    );
  }

  crearFormulario() {
    this.forma = this.fb.group({
      nombre: ["", [Validators.required, Validators.minLength(5)]],
      apellido: ["", [Validators.required, Validators.minLength(5)]],
      correo: [
        "",
        [
          Validators.required,
          Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$"),
        ],
      ],
      direccion: this.fb.group({
        distrito: ["", Validators.required],
        ciudad: ["", Validators.required],
      }),
    });
  }

  cargarDataAlFormulario() {
    this.forma.setValue({
      nombre: "César",
      apellido: "González",
      correo: "cedgo1997@gmail.com",
      direccion: {
        distrito: "Capital",
        ciudad: "Caracas",
      },
    });
  }

  guardar() {
    if (this.forma.invalid) {
      return Object.values(this.forma.controls).forEach((control) => {
        if (control instanceof FormGroup) {
          Object.values(control.controls).forEach((control) => {
            control.markAsTouched();
          });
        } else {
          control.markAsTouched();
        }
      });
    }

    console.log(this.forma.value);
  }
}
