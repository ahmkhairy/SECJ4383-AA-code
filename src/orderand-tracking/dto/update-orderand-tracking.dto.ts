import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderandTrackingDto } from './create-orderand-tracking.dto';

export class UpdateOrderandTrackingDto extends PartialType(CreateOrderandTrackingDto) {}
