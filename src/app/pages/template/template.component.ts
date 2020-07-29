import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { PaisService } from "src/app/services/pais.service";

@Component({
  selector: "app-template",
  templateUrl: "./template.component.html",
  styleUrls: ["./template.component.css"],
})
export class TemplateComponent implements OnInit {
  constructor(private paisService: PaisService) {}

  usuario = {
    nombre: "César",
    apellido: "González",
    correo: "cedgo1997@gmail.com",
  };

  paises:any[] = [];

  ngOnInit() {
    this.paisService.getPaises().subscribe((paises) => {
      this.paises = paises;
    });
  }

  guardar(forma: NgForm) {
    console.log(forma);

    if (forma.invalid) {
      Object.values(forma.controls).forEach((control) => {
        control.markAsTouched();
      });
    }

    console.log(forma.value);
  }
}
