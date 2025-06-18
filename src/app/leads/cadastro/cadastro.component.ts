import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Lead } from '../leads.model';
import { LeadService } from '../leads.service';
import { ClienteService } from '../../clientes/clientes.service';
import { Cliente } from '../../clientes/clientes.model';

@Component({
  selector: 'app-cadastro',
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css',
})
export class CadastroComponent {
  lead: Lead = {
    id: '',
    nome: '',
    email: '',
    telefone: '',
    status: '',
    origem: '',
    clienteNome: '',
    clienteId: null,
  };

  clientesEncontrados: Cliente[] = [];

  constructor(
    private leadService: LeadService,
    private clienteService: ClienteService,
    private router: Router
  ) { }

  onSearchCliente() {
    console.log('Buscando cliente pelo nome:', this.lead.clienteNome);
    if (!this.lead.clienteNome) return;
    this.clienteService.findByNome(this.lead.clienteNome).subscribe(clientes => {
      console.log('Clientes encontrados:', clientes);
      if (clientes.length === 1) {
        console.log('Encontrado cliente único:', clientes[0]);
        this.lead.clienteId = clientes[0].id; // Atualiza o ID antes do cadastro
      } else {
        this.lead.clienteId = null; // ou exibe mensagem de erro
      }
    });
  }


  salvar() {
    this.leadService.cadastrarLead(this.lead).subscribe(() => {
      this.router.navigate(['/leads/listagem'])
    })
  }

}