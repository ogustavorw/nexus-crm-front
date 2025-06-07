import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './clientes.model';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private apiURL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  listarCliente(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.apiURL);
  }

  cadastrarCliente(Cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.apiURL, Cliente);
  }

  buscarCliente(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.apiURL}/${id}`)
  }

  atualizarCliente(
    id: number,
  Cliente:Cliente): Observable<Cliente> {
    return this.http.patch<Cliente>(`${this.apiURL}/${id}`, Cliente)
  }
  deletarCliente(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/${id}`)
  }
}