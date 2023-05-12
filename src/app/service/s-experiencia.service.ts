import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class SExperienciaService {

  expURL = 'http://localhost:8080/experiencia/';

  constructor(private httpClient: HttpClient) {}

    public lista(): Observable<Experiencia[]>{
      return this.httpClient.get<Experiencia[]>(this.expURL + 'listaExpe');
    }
   
    public detail(id:number): Observable<Experiencia> {
      return this.httpClient.get<Experiencia>(this.expURL + `detail/${id}`);
    }

    public save(experiencia: Experiencia): Observable<any>{
      return this.httpClient.post<any>(this.expURL + 'nuevaExpe', experiencia);
    }

    public update(id: number, experiencia: Experiencia): Observable<any>{
      return this.httpClient.put<any>(this.expURL + `updateExpe/${id}`, experiencia);
    }

    public detele(id: number): Observable<any>{
      return this.httpClient.delete<any>(this.expURL + `deleteExpe/${id}`);
    }
}
