import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule, CdkDragDrop } from '@angular/cdk/drag-drop';
import { LeadService } from '../leads.service';

interface Lead {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  origem: string;
  status: string;
  clienteId: string;
}

interface Column {
  title: string;
  status: string;
  leads: Lead[];
}

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.css'],
  standalone: true,
  imports: [CommonModule, DragDropModule]
})
export class KanbanComponent implements OnInit {
  columns: Column[] = [
    { title: 'Novo', status: 'novo', leads: [] },
    { title: 'Contatado', status: 'contatado', leads: [] },
    { title: 'Interessado', status: 'interessado', leads: [] },
    { title: 'Fechado', status: 'fechado', leads: [] }
  ];

  constructor(private LeadService: LeadService) { } // injetando o serviço

  ngOnInit() {
    this.carregarLeads();
  }

  carregarLeads() {
    this.LeadService.getLeadsPorStatus().subscribe(data => {
      this.columns = this.columns.map(col => ({
        ...col,
        leads: data[col.status as keyof typeof data] || []
      }));
    });
  }

  onItemDrop(event: CdkDragDrop<any, Column>) {
    const lead = event.item.data as Lead;

    if (!lead.id) return;

    const oldCol = event.previousContainer.data as Column;
    const newCol = event.container.data as Column;

    if (oldCol.status === newCol.status) return;

    // Remove da coluna antiga e adiciona na nova
    const movedLead = oldCol.leads.find(l => l.id === lead.id);

    if (!movedLead) return;

    oldCol.leads = oldCol.leads.filter(l => l.id !== lead.id);
    newCol.leads = [...newCol.leads, movedLead];
    movedLead.status = newCol.status;

    console.log('✅ Status atualizado localmente:', movedLead.status);
  }
}