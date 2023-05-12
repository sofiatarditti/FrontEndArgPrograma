import { Component, EventEmitter, OnInit, Output,  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'Sofia Tarditti';

    modal: boolean;
    logged: boolean = false;


  ngOnInit(){

  }

  abrirModal(){
    this.modal = true;
  }
  onModalClicked(){
    this.modal = false;
    this.logged = true;
  }

  cerrarModal(){
    this.modal = false;
  }


  }






