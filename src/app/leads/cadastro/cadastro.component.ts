import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Lead } from '../leads.model';
import { LeadService } from '../leads.service';

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
    origem: '',
    status:'',
    clienteId: '',
  };

  constructor(
    private leadService: LeadService,
    private router: Router
  ) {}

  salvar() {
    this.leadService.cadastrarLead(this.lead).subscribe(() => {
      this.router.navigate(['/listagem'])
    })
  }

}