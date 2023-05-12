import { Component, EventEmitter, OnInit, Output } from '@angular/core';





@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

@Output() loginModal = new EventEmitter<boolean>();

@Output() closeModal = new EventEmitter<boolean>();
 

  username: string;
  password: string;
  logged: boolean = true;
  

  constructor () {


  }

  ngOnInit() {
    
  }

  userLogin(){
    if(this.username == "sofia" && this.password == "sofia123"){
       this.loginModal.emit();
      } else {
        this.logged = false;
      }
      
  }
  cerrarModal(){
    this.closeModal.emit();
  }


  }
