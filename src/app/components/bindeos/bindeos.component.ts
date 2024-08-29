import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bindeos',
  standalone: true,
  imports: [FormsModule], //JAMAS IMPORTAR APP COMPONENT
  templateUrl: './bindeos.component.html',
  styleUrl: './bindeos.component.css'
})
export class BindeosComponent {
  title = 'Thomas';
  
  apellido: string = '';
  cadeba: string = '';
  numbero: number = 0;
  fecha: Date = new Date();
  objetos: {} = {
    nombre: "string",
    apellido: 'algo'
  }

  listas: any[] = [0, 1, 2, '3'];

  listas2: string | number = "";
  otro: string | null = '';
  vacio: undefined;




  //agregar un ! hace que la variable pueda ser nula 
  
  
  imagen = 'https://imgs.search.brave.com/9q6_9kNiYzg-aL30Uy3-fmAjgVDcv1y6rvkK5coc7wc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lMDAt/ZWxtdW5kby51ZWNk/bi5lcy9hc3NldHMv/bXVsdGltZWRpYS9p/bWFnZW5lcy8yMDIz/LzA0LzEyLzE2ODEz/MTE1NTQwMDA1Lmpw/Zw'

  mostrarDatos(){
    console.log(this.apellido);
  }


}
