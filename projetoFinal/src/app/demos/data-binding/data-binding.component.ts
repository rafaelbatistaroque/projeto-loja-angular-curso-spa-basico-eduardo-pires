import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html'
})
export class DataBindingComponent {
  public contadorCliques: number = 0;
  public nome: string = 'Inteligência';

  public adicionarClique() {
    this.contadorCliques++;
  }

  public zerarContador() {
    this.contadorCliques = 0;
  }

  // public alterarTexto(evento: any) {
  //   this.nome = evento.target.value;
  // }
}
