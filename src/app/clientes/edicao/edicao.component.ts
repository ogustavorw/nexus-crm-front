import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../clientes.model';
import { ClienteService } from '../clientes.service';

@Component({
  selector: 'app-edicao',
  imports: [CommonModule, FormsModule],
  templateUrl: './edicao.component.html',
  styleUrl: './edicao.component.css',
})

export class EdicaoComponent implements OnInit {
  cliente: Cliente = {
    id: 0,
    nome: '',
    email: '',
    telefone: 0,
  };
  private id!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clienteService: ClienteService
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.carregarCliente();
  }

  carregarCliente(): void {
    if (!this.id) {
      //é number

      this.router.navigate(['/listagem']);
      return;
    }

    this.clienteService.buscarCliente(this.id).subscribe((a) => {
      this.cliente = a;
    });
  }

  salvar(): void {
    if (!this.cliente) return;

    this.clienteService.atualizarCliente(this.id, this.cliente).subscribe(() => {
      this.router.navigate(['/listagem']);
    });
  }
}