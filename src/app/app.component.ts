import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Usuario } from './classes/usuario';
import { LoginComponent } from './components/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, LoginComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Thomas';
  
  Edad1!: number;
  Edad2!: number;

  sumaEdad!: number;

  promedioEdad!: number;
  
  sumaEdades()
  { 
    this.sumaEdad = this.Edad1 + this.Edad2;
  }

  promedioEdades()
  { 
    this.promedioEdad = (this.Edad1 + this.Edad2)/2;
  }

  limpiarCuadros()
  {
    (<HTMLInputElement>document.getElementById('sumaInput')).value = '';
    (<HTMLInputElement>document.getElementById('promedioInput')).value = '';
  }

  ngOnInit()
  {

  }





}
