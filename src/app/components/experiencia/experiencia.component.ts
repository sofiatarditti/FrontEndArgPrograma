import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit{

  expe: Experiencia [] = [];


  constructor(private sExperiencia: SExperienciaService){
  }

  cargarExperiencia(): void{
    this.sExperiencia.lista().subscribe(data => {this.expe = data});

  }


  ngOnInit (): void {
    this.cargarExperiencia();


  }

}
