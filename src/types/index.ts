export interface Contact {
  id: string;
  name: string;
  artistName?: string;
  email: string;
  whatsappE164?: string;
  instagram?: string;
  spotify?: string;
  youtube?: string;
  location?: string;
  timezone?: string;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Deal {
  id: string;
  contactId: string;
  title: string;
  source: 'website' | 'whatsapp' | 'referral' | 'instagram' | 'other';
  stage: 'New' | 'Qualified' | 'Discovery Booked' | 'Quote Sent' | 'Deposit Received' | 'Production' | 'Vocals Received' | 'Mix' | 'Master' | 'Client Approval' | 'Release Prep' | 'Closed Won' | 'Closed Lost';
  services: string[];
  budget: {
    min: number;
    max: number;
    currency: string;
  };
  timeline: {
    start?: Date;
    end?: Date;
  };
  priorityScore: number;
  ownerUserId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Activity {
  id: string;
  dealId: string;
  type: 'note' | 'call' | 'whatsapp_in' | 'whatsapp_out' | 'email_in' | 'email_out' | 'meeting' | 'file' | 'status';
  body: string;
  meta?: Record<string, any>;
  createdAt: Date;
  createdBy: string;
}

export interface Task {
  id: string;
  dealId: string;
  title: string;
  dueAt: Date;
  status: 'pending' | 'completed' | 'overdue';
  assigneeUserId: string;
  createdAt: Date;
}

export interface Quote {
  id: string;
  dealId: string;
  items: QuoteItem[];
  currency: string;
  taxPct: number;
  totals: {
    subtotal: number;
    tax: number;
    total: number;
  };
  validUntil: Date;
  status: 'draft' | 'sent' | 'accepted' | 'rejected';
  pdfUrl?: string;
  createdAt: Date;
}

export interface QuoteItem {
  name: string;
  qty: number;
  unitPrice: number;
  subtotal: number;
}

export interface Invoice {
  id: string;
  dealId: string;
  quoteId?: string;
  number: string;
  items: QuoteItem[];
  currency: string;
  taxPct: number;
  totals: {
    subtotal: number;
    tax: number;
    total: number;
  };
  depositPct?: number;
  amountDue: number;
  status: 'draft' | 'sent' | 'paid' | 'partial' | 'void';
  issueDate: Date;
  dueDate: Date;
  pdfUrl?: string;
  paymentNotes?: string;
  paidAt?: Date;
}

export interface Payment {
  id: string;
  invoiceId: string;
  amount: number;
  method: 'bank' | 'cash' | 'transfer' | 'other';
  status: 'logged' | 'confirmed';
  reference?: string;
  receivedAt: Date;
}

export interface FileUpload {
  id: string;
  dealId: string;
  kind: 'demo' | 'stems' | 'mix' | 'master' | 'contract' | 'ref';
  fileName: string;
  storagePath: string;
  size: number;
  createdAt: Date;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'producer' | 'engineer' | 'sales' | 'finance';
  avatar?: string;
  createdAt: Date;
}