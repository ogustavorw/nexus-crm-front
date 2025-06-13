import { Routes } from '@angular/router';

// Clientes
import { ListagemComponent } from './clientes/listagem/listagem.component';
import { CadastroComponent } from './clientes/cadastro/cadastro.component';
import { EdicaoComponent } from './clientes/edicao/edicao.component';

// Leads
import { ListagemComponent as LeadListagem } from './leads/listagem/listagem.component';
import { CadastroComponent as LeadCadastro } from './leads/cadastro/cadastro.component';
import { EdicaoComponent as LeadEdicao } from './leads/edicao/edicao.component';

//Kanban
import { KanbanComponent } from './leads/kanban/kanban.component';

export const routes: Routes = [
  // Rota inicial
  { path: '', redirectTo: 'clientes/listagem', pathMatch: 'full' },

  // Rotas CLIENTES
  { path: 'clientes/listagem', component: ListagemComponent },
  { path: 'clientes/cadastro', component: CadastroComponent },
  { path: 'clientes/:id/editar', component: EdicaoComponent },

  // Rotas LEADS
  { path: 'leads/listagem', component: LeadListagem },
  { path: 'leads/cadastro', component: LeadCadastro },
  { path: 'leads/:id/editar', component: LeadEdicao },

  // Rota Kanban
  {path: 'leads/kanban', component: KanbanComponent},
  
  // Rota "not found"
  { path: '**', redirectTo: 'clientes/listagem' }



];