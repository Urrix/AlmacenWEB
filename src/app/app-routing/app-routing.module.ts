import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { InicioSesionComponent } from '../inicio-sesion/inicio-sesion.component';
import { ElementosComponent } from '../elementos/elementos.component';
import { DatosComponent } from '../datos/datos.component';
import { PerfilComponent } from '../perfil/perfil.component';
import { PedidosComponent } from '../pedidos/pedidos.component';
import { AppComponent } from '../app.component';

const routes: Routes = [
{ path: 'inicio-sesion', component: InicioSesionComponent },
{ path: 'elementos', component: ElementosComponent },
{ path: 'datos', component: DatosComponent },
{ path: 'perfil', component: PerfilComponent },
{ path: 'producto', component: PedidosComponent },
{ path: 'inicio', component:AppComponent},
{ path: 'inicio', redirectTo: '/inicio', pathMatch: 'full' } 
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ]
})
export class AppRoutingModule { }
