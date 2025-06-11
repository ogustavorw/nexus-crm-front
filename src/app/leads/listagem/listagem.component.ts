import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LeadService } from '../leads.service';
import { Lead } from '../leads.model';

@Component({
  selector: 'app-listagem',
  imports: [ CommonModule, RouterLink ],
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.css'
})

export class ListagemComponent implements OnInit {
  
  lead: Lead[] = []

  constructor(private leadService: LeadService){

  }
  ngOnInit(): void {
    this.carregarLead()
  }

  carregarLead(): void{
    // este .subscribe serve para esperar a requisição mandar um retorno da requisição HTTP
    this.leadService.listarLead().subscribe((res) => {
      this.lead = res;
    })
  }
}