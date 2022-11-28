import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.css']
})
export class ConversionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  cantidad: number = 0;
  inicial: string = "1";
  final: string = "2";
  resultado: number = 0;
  calcular() {
    let tipoCambio = 19.35;
    if(this.cantidad < 0) {
      alert("Ingrese una cantidad válida.");
      return;
    }
    if(this.inicial == "1" && this.final == "2"){
      this.resultado = this.cantidad / tipoCambio;
    } else if(this.inicial == "2" && this.final == "1"){
      this.resultado = this.cantidad * tipoCambio;
    } else {
      this.resultado = this.cantidad;
    }
  }
}
