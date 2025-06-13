import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lead } from './leads.model';


@Injectable({
  providedIn: 'root',
})
export class LeadService {
  private apiURL = 'http://localhost:3000/lead';

  constructor(private http: HttpClient) { }

  listarLead(): Observable<Lead[]> {
    return this.http.get<Lead[]>(this.apiURL);
  }

  cadastrarLead(Lead: Lead): Observable<Lead> {
    return this.http.post<Lead>(this.apiURL, Lead);
  }

  buscarLead(id: string): Observable<Lead> {
    return this.http.get<Lead>(`${this.apiURL}/${id}`)
  }

  atualizarLead(
    id: string,
    Lead: Lead): Observable<Lead> {
    return this.http.patch<Lead>(`${this.apiURL}/${id}`, Lead)
  }
  deletarLead(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/${id}`)
  }

  // Método usado no Kanban
  getLeadsPorStatus(): Observable<{
    novo: Lead[];
    contatado: Lead[];
    interessado: Lead[];
    fechado: Lead[];
  }> {
    return this.http.get<{
      novo: Lead[];
      contatado: Lead[];
      interessado: Lead[];
      fechado: Lead[];
    }>(`${this.apiURL}/por-status`);
  }

  atualizarStatus(id: string, status: string): Observable<void> {
    return this.http.patch<void>(`${this.apiURL}/${id}/status`, { status });
  }

}