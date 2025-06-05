import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from '../clientes.model';
import { ClienteService } from '../clientes.service';

@Component({
  selector: 'app-cadastro',
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css',
})
export class CadastroComponent {
    cliente: Cliente = {
    id: 0,
    nome: '',
    email: '',
    telefone: 0,
  };

  constructor(
    private clienteService: ClienteService,
    private router: Router
  ) {}

  salvar() {
    this.clienteService.cadastrarCliente(this.cliente).subscribe(() => {
      this.router.navigate(['/listagem'])
    })
  }

}