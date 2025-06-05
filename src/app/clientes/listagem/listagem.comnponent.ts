import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ClienteService } from '../clientes.service';
import { Cliente } from '../clientes.model';

@Component({
  selector: 'app-listagem',
  imports: [ CommonModule, RouterLink ],
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.css'
})

export class ListagemComponent implements OnInit {
  
  cliente: Cliente[] = []

  constructor(private ClienteService: ClienteService){

  }
  ngOnInit(): void {
    this.carregarCliente()
  }

  carregarCliente(): void{
    // este .subscribe serve para esperar a requisição mandar um retorno da requisição HTTP
    this.ClienteService.listarCliente().subscribe((res) => {
      this.cliente = res;
    })
  }
}