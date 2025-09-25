
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { InvoiceId } from './entities/invoice.entity';

@Controller('invoice')
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}

  @Post()
  create(@Body() createInvoiceDto: CreateInvoiceDto) {
    return this.invoiceService.create(createInvoiceDto);
  }

  @Get()
  findAll() {
    return this.invoiceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.invoiceService.findOne(new InvoiceId(+id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInvoiceDto: UpdateInvoiceDto) {
    return this.invoiceService.update(new InvoiceId(+id), updateInvoiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.invoiceService.remove(new InvoiceId(+id));
    return { message: 'Invoice removed' };
  }

  @Get('print/:id')
  printOrderInvoice(@Param('id') id: string) {
    return this.invoiceService.printOrderInvoice(new InvoiceId(+id));
  }

  @Get('print')
  printAllInvoices() {
    return this.invoiceService.printAllInvoices();
  }
}
