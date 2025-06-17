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
    if (!this.lead.clienteId) return;

    this.clienteService.findByNome(this.lead.clienteId).subscribe(clientes => {
      this.clientesEncontrados = clientes;

      if (clientes.length === 1) {
        this.lead.clienteId = clientes[0].id;
      }
    });
  }


  salvar() {
    this.leadService.cadastrarLead(this.lead).subscribe(() => {
      this.router.navigate(['/listagem'])
    })
  }

}