import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './clientes.model';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private apiURL = 'http://localhost:3000/cliente';

  constructor(private http: HttpClient) {}

  listarCliente(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.apiURL);
  }

  cadastrarCliente(Cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.apiURL, Cliente);
  }

  buscarCliente(id: string): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.apiURL}/${id}`)
  }

  atualizarCliente(
    id: string,
  Cliente:Cliente): Observable<Cliente> {
    return this.http.patch<Cliente>(`${this.apiURL}/${id}`, Cliente)
  }
  deletarCliente(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/${id}`)
  }
}