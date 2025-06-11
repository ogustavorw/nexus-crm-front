import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Lead } from '../leads.model';
import { LeadService } from '../leads.service';

@Component({
  selector: 'app-edicao',
  imports: [CommonModule, FormsModule],
  templateUrl: './edicao.component.html',
  styleUrl: './edicao.component.css',
})

export class EdicaoComponent implements OnInit {
    lead: Lead = {
    id: '',
    nome: '',
    email: '',
    telefone: '',
    origem: '',
    status:'',
    clienteId: '',
  };
  private id!: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private leadService: LeadService
  ) {}

  ngOnInit(): void {
    this.id = String(this.route.snapshot.paramMap.get('id'));
    this.carregarLead();
  }

  carregarLead(): void {
    if (!this.id) {
      //é string

      this.router.navigate(['/lead/listagem']);
      return;
    }

    this.leadService.buscarLead(this.id).subscribe((a) => {
      this.lead = a;
    });
  }

  salvar(): void {
    if (!this.lead) return;

    this.leadService.atualizarLead(this.id, this.lead).subscribe(() => {
      this.router.navigate(['/lead/listagem']);
    });
  }
}