import { Component } from '@angular/core';

interface Item {
  id: string[];
  randomNum: number;
  isBelow6: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listaItems: Item[] = [];
  apellidos: string[] = ['Báez', 'Pérez', 'Méndez', 'Herrera', 'Zamora', 'Alanis', 'Gutierrez'];
  showRedColors = false;
  
  generarAlumnos(count: number) {
    this.listaItems = [];

    for (let i = 0; i < count; i++) {
      const apellidosAleatorios: string[] = [];
      
      const indAleatorio = Math.floor(Math.random() * this.apellidos.length);
      apellidosAleatorios.push(this.apellidos[indAleatorio]);

      const randomNum = Math.floor(Math.random() * 10);
      const isBelow6 = randomNum < 6;

      const item: Item = {
        id: apellidosAleatorios,
        randomNum,
        isBelow6
      };
      this.listaItems.push(item);
    }
  }
  
  filterItems() {
    this.listaItems.forEach(item => {
      item.isBelow6 = item.randomNum < 6;
    });
    this.showRedColors = true;
  }
  
  ngOnInit() {
    this.generarAlumnos(3);
  }
}
