import { AuthService } from './shared/services/auth.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CRUD-ToDo';
  menu: boolean = false
  
  constructor(public status:AuthService) { 

  }

  ngOnInit(): void {
    this.status.mostrarMenu.subscribe(
      // mostrar => this.menu = mostrar
      this.menu = true
    );
  }

  sair(){
    this.status.SignOut()
  }

}
