import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule, CdkDragDrop } from '@angular/cdk/drag-drop';

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
export class KanbanComponent {
  columns: Column[] = [
    { title: 'Novo', status: 'novo', leads: [] },
    { title: 'Contatado', status: 'contatado', leads: [] },
    { title: 'Interessado', status: 'interessado', leads: [] },
    { title: 'Fechado', status: 'fechado', leads: [] }
  ];

  onItemDrop(event: CdkDragDrop<any, Column>) {
  const lead = event.item.data as Lead;

  // Garanta que estamos lidando com leads
  if (!lead || !lead.id) return;

  const oldCol = event.previousContainer.data as Column;
  const newCol = event.container.data as Column;

  if (oldCol.status === newCol.status) return;

  // Remove da antiga, adiciona na nova
  const movedLead = oldCol.leads.find(l => l.id === lead.id);

  if (!movedLead) return;

  oldCol.leads = oldCol.leads.filter(l => l.id !== lead.id);
  newCol.leads = [...newCol.leads, movedLead];
  movedLead.status = newCol.status;
}
}