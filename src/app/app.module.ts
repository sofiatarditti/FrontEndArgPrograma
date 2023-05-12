import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ModalComponent } from './components/modal/modal.component';
import { FormsModule } from '@angular/forms';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EditarExpeComponent } from './components/editar-expe/editar-expe.component';
import { AppRoutingModule } from './app-routing.module';
import { EdicionComponent } from './components/editar-expe/edicion.component';
import { FormacionComponent } from './components/formacion/formacion.component';
import { OtrasHabilidadesComponent } from './components/otras-habilidades/otras-habilidades.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ModalComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EditarExpeComponent,
    EdicionComponent,
    FormacionComponent,
    OtrasHabilidadesComponent
  ],
  
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
