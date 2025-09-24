import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderModule } from './order/order.module';
import { OrderandTrackingModule } from './orderand-tracking/orderand-tracking.module';
import { InvoiceModule } from './invoice/invoice.module';
import { ManagemenuModule } from './managemenu/managemenu.module';

@Module({
  imports: [OrderModule, OrderandTrackingModule, InvoiceModule, ManagemenuModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
