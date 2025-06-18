export interface Lead {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  origem: string;
  status: string; // Pode ser 'novo', 'contatado', 'interessado', 'fechado'
  clienteId: string | null; //usado na api
  clienteNome?: string; //apenas para cadastro no front
}