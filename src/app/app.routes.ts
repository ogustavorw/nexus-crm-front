import { Routes } from '@angular/router';
import { EdicaoComponent } from './clientes/edicao/edicao.component';
import { CadastroComponent } from './clientes/cadastro/cadastro.component';
import { ListagemComponent } from './clientes/listagem/listagem.comnponent';


export const routes: Routes = [
    
    {path: '', redirectTo: 'listagem', pathMatch: 'full'},

    {path: 'listagem', component: ListagemComponent},
    
    {path: 'cadastro', component: CadastroComponent},
    
    {path: 'edicao/:id', component: EdicaoComponent}

];