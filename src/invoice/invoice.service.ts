
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { Invoice, InvoiceId } from './entities/invoice.entity';

@Injectable()
export class InvoiceService {
  private invoices: Invoice[] = [];
  private nextId = 1;

  create(createInvoiceDto: CreateInvoiceDto): Invoice {
    const invoice = new Invoice(
      new InvoiceId(this.nextId++),
      createInvoiceDto.amount,
      createInvoiceDto.description,
    );
    this.invoices.push(invoice);
    return invoice;
  }

  findAll(): Invoice[] {
    return this.invoices;
  }

  findOne(id: InvoiceId): Invoice {
    const invoice = this.invoices.find(inv => inv.id.value === id.value);
    if (!invoice) throw new NotFoundException('Invoice not found');
    return invoice;
  }

  update(id: InvoiceId, updateInvoiceDto: UpdateInvoiceDto): Invoice {
    const invoice = this.findOne(id);
    invoice.amount = updateInvoiceDto.amount ?? invoice.amount;
    invoice.description = updateInvoiceDto.description ?? invoice.description;
    return invoice;
  }

  remove(id: InvoiceId): void {
    const index = this.invoices.findIndex(inv => inv.id.value === id.value);
    if (index === -1) throw new NotFoundException('Invoice not found');
    this.invoices.splice(index, 1);
  }

  printOrderInvoice(id: InvoiceId): string {
    const invoice = this.findOne(id);
    return `Invoice #${invoice.id.value}: ${invoice.description}, Amount: ${invoice.amount}`;
  }

  printAllInvoices(): string[] {
    return this.invoices.map(
      inv => `Invoice #${inv.id.value}: ${inv.description}, Amount: ${inv.amount}`,
    );
  }
}
